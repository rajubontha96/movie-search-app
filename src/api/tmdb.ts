import axios from 'axios'

const tmdbApi = axios.create({
  baseURL: import.meta.env.VITE_TMDB_BASE_URL,
})

export default tmdbApi