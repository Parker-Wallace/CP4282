import Movie from './Movie'
import Card from 'react-bootstrap/Card';


function MovieList({Movies}) {
    return (
        <Card><div>
                {Movies.movies.map((movie) => (
                   <Movie name={movie.name} year={movie.year} rating={movie.rating}></Movie>
))}
        </div></Card>
        
    )
}

export default MovieList