import { useEffect, useState } from 'react'
import { Movie } from '../types/movie'
import { searchMovies } from '../services/movieService'
import { sortMovies } from '../utils/sortMovies'

export const useMovies = (
  query: string,
  page: number,
  sortBy: string,
  ratingFilter: number
) => {
  const [movies, setMovies] = useState<Movie[]>([])
  const [loading, setLoading] = useState(false)
  const [totalPages, setTotalPages] = useState(0)

  useEffect(() => {
    const fetchMovies = async () => {
      if (!query) {
        setMovies([])
        return
      }

      setLoading(true)

      try {
        const data = await searchMovies({
          query,
          page,
        })

        let filteredMovies = data.results.filter(
          movie => movie.vote_average >= ratingFilter
        )

        filteredMovies = sortMovies(filteredMovies, sortBy)

        setMovies(filteredMovies)
        setTotalPages(data.total_pages)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    fetchMovies()
  }, [query, page, sortBy, ratingFilter])

  return {
    movies,
    loading,
    totalPages,
  }
}