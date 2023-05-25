import { Link } from "react-router-dom";
import NavLogged from "./NavLogged"

const NavBar = ({ user, logoutUser }) => {


    return (
        <nav>
            <div className="header">
                <h1>
                    <Link to="/">Home</Link>
                </h1>           

                {user && user.role === "admin" ? <NavLogged /> : null}
   

                <h1>
                    {user ? <button onClick={logoutUser}>Logout</button> : <Link to="/login">Login</Link>}
                </h1>
                
            </div>
        </nav>
    )
}

export default NavBar;