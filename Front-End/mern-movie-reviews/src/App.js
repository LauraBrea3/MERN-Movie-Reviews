import './App.css';
import { useState, useEffect } from 'react'
import Review from './components/Review';
import Header from './components/Header';
import MovieList from './components/MovieList';
import axios from 'axios'

function App() {

  const [movies, setMovies] = useState([])

const fetchMovies = async() => {
    const { data } = await axios.get('/movies')
    setMovies(data)
}

console.log(movies)

useEffect(() => {
  fetchMovies()
}, [])
  

  return (
    <div className="App">
      
      <Header/>
       <main>
        
      <div className="d-flex flex-wrap justify-content-center"> 
      {movies
        .map((movie) => (
          <MovieList key={movie.id} movie={movie} />
        ))
      }

      </div>

        </main>
      
    </div>
  );
}

export default App;
