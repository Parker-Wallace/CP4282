import Movie from './Movie'

function MovieList({Movies}) {
    return (
        <section>
                {Movies.movies.map((movie) => (
                   <Movie name={movie.name} year={movie.year} rating={movie.rating}></Movie>
    ))}
        </section>
    )
}

export default MovieList