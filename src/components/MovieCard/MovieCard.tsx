import { Movie } from '../../types/movie'
import './MovieCard.css'

interface Props {
  movie: Movie
}

const MovieCard = ({ movie }: Props) => {
  return (
    <div className="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="movie-poster"
      />

      <div className="movie-content">
        <h1>{movie.title}</h1>

        <p>
          <strong>RELEASE DATE:</strong>{' '}
          {movie.release_date}
        </p>

        <p>
          <strong>RATING:</strong>{' '}
          {movie.vote_average}
        </p>

        <p>{movie.overview}</p>
      </div>
    </div>
  )
}

export default MovieCard