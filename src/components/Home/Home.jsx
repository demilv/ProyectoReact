import { dark } from "../Context/darkContext"
import { useContext } from "react";


function Home(){
    const background = useContext(dark)
    return <>
    <div className={background ? "black" : "orange"}>
        <h1>¡Bienvenido a nuestra base de datos de Películas!</h1>
        </div>
    </>
}
export default Home;