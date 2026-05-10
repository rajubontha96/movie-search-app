import tmdbApi from '../api/tmdb'
import { MoviesResponse } from '../types/movie'

interface SearchParams {
  query: string
  page: number
}

export const searchMovies = async ({
  query,
  page,
}: SearchParams): Promise<MoviesResponse> => {
  const response = await tmdbApi.get('/search/movie', {
    params: {
      api_key: import.meta.env.VITE_TMDB_API_KEY,
      query,
      page,
    },
  })

  return response.data
}