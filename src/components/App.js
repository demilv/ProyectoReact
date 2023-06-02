import '../styles/App.css';
import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { dark } from './Context/darkContext'

import Navbar from "./Navbar/Navbar"
import Home from "./Home/Home"
import Contact from "./Contact/Contact"
import Login from "./Login/Login"
import Pelis from './Pelis/Pelis';
import imgPelis from '../images/c.jpg'



const usuarios= [
  {
    email: 'gonzalo@upgrade.com',
    password: 'aaaaa',
    name: 'Gonzalo',
    role: 'admin',
  },
  {
    email: 'JoseMaria@upgrade.com',
    password: 'bbbbb',
    name: 'Jose',
    role: 'client',
  },
];

function App() {
  const navigate = useNavigate();
  // primer estado del user null, aun no se  define
  const [user, setUser] = useState(null);
  const [loginError, setLoginError] = useState('');
  const loginUser = (formData, prevRoute) => {
    const existsUser = usuarios.find(
      (user) =>
        user.email === formData.email && user.password === formData.password
    );
    if (existsUser) {
      // segundo estado del user, informacion del usuario logado
      setUser(existsUser);
      setLoginError('');
      // en caso que el login se haya realizado a partir de una ruta protegida a la cual no se tenia acceso, un vez has iniciado sesion devuelvete a la ruta protegida y sino ve al home
      navigate(prevRoute || '/');
    } else {
      // tercer estado del user false, ha tratado de hacer login y no pudo
      setUser(false);
      setLoginError('Usuario o contraseña incorrecta');
    }
  };
  const logoutUser = () => {
    setUser(null);
    navigate('/');
  };

  const [background, setBackground] = useState(false);

  // funcion manejadroa del evento del checkbox
  const handleClick = (ev) => {
    setBackground(ev.target.checked);
  };

  return (
    <div className="divFather">
     <form className={`dark-Mode ${background ? 'black' : 'orange'}`} action="">
      <label>
        <input
          type="checkbox"
          name="colorTheme"
          onClick={handleClick}
          checked={background}/>          
          Presione este boton para el modo oscuro
         </label>
      </form>

    <dark.Provider value={background}>
    
      <div className={`App-img ${background ? 'black' : 'orange'}`}
>
        <img className="bigPeli" src={imgPelis} alt=""/>  
      </div>
      <div className={`App-header ${background ? 'black' : 'orange'}`}>     
      <Navbar user={user} logoutUser={logoutUser} />    
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contacto" element={<Contact />} />
      <Route
            path="/login"
            element={<Login loginUser={loginUser} loginError={loginError} />}
          />
      <Route path="/api" element={<Pelis />} />
      </Routes>
      </div> 
      </dark.Provider>   
    </div>
  );
}

export default App;
