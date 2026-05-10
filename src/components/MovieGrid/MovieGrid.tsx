import { Movie } from '../../types/movie'
import MovieCard from '../MovieCard/MovieCard'
import './MovieGrid.css'

interface Props {
  movies: Movie[]
}

const MovieGrid = ({ movies }: Props) => {
  return (
    <div className="movie-grid">
      {movies.map(movie => (
        <MovieCard
          key={movie.id}
          movie={movie}
        />
      ))}
    </div>
  )
}

export default MovieGrid