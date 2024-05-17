import './App.css';
import NavBar from './components/NavBar';
import MovieList from './components/MovieList'
import mymovies from './movies.json'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
            <NavBar></NavBar>
            <MovieList Movies={mymovies}></MovieList>
    </div>
  );
}

export default App;
