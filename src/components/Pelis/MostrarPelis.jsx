function MostrarPelis({ movies }) {

    const renderMovies = () => {
        return movies.map((movie) => <article key={movie.id}>
            <h4>{movie.director} </h4>
            <h4>{movie.title}</h4>
        </article>)
    }

    return (
        <section>
            {renderMovies()}
        </section>
    )
}
export default MostrarPelis