import { useState, useEffect } from "react"
import MostrarPelis from "./MostrarPelis";


function Pelis() {
  const [movies, setMovies] = useState([]);
  const [genre, setGenre] = useState('Acción'); 

  const getDataApi = async (genre) => {
    const res = await fetch(
      `https://project-enlace-node.vercel.app/movie`
    );
    const resJson = await res.json();
    const filteredMovies = resJson.filter((movie) => movie.genre === genre);
    setMovies(filteredMovies)
  };

  useEffect(() => {
    getDataApi(genre);
  }, [genre]);

  return (
    <>
      <div>
        <select name="" id="" onChange={(ev) => setGenre(ev.target.value)}>
          <option value="Acción">Acción</option>
          <option value="Animación">Animación</option>
          <option value="Comedia romántica">Comedia Romántica</option>
          <option value="Ciencia ficción">Ciencia Ficción</option>
        </select>
      </div>
      <div>
        <MostrarPelis movies={movies}></MostrarPelis>
      </div>
    </>
  );
}

export default Pelis