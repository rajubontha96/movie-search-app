import { Movie } from '../types/movie'

export const sortMovies = (
  movies: Movie[],
  sortBy: string
): Movie[] => {
  const sortedMovies = [...movies]

  switch (sortBy) {
    case 'rating':
      return sortedMovies.sort(
        (a, b) => b.vote_average - a.vote_average
      )

    case 'release-date':
      return sortedMovies.sort(
        (a, b) =>
          new Date(b.release_date).getTime() -
          new Date(a.release_date).getTime()
      )

    default:
      return movies
  }
}