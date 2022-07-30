import { MovieProps } from "../App"
import { MovieCard } from "./MovieCard"

interface movieProps{
    movies: MovieProps[]
    selectedGenre: {title: string}
}

export function Content({movies,selectedGenre}:movieProps) {
  return (
    <div className="container">
        <header>
          <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
        </header>

        <main>
          <div className="movies-list">
            {movies.map(movie => (
              <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
            ))}
          </div>
        </main>
      </div>
  )
}