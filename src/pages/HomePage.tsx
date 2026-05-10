import { useState } from 'react'
import Header from '../components/Header/Header'
import SearchBar from '../components/SearchBar/SearchBar'
import MovieGrid from '../components/MovieGrid/MovieGrid'
import Pagination from '../components/Pagination/Pagination'
import Loader from '../components/Loader/Loader'
import EmptyState from '../components/EmptyState/EmptyState'
import { useMovies } from '../hooks/useMovies'
import './HomePage.css'

const HomePage = () => {
  const [searchInput, setSearchInput] =
    useState('Jurassic Park')

  const [query, setQuery] = useState(
    'Jurassic Park'
  )

  const [page, setPage] = useState(1)

  const [sortBy, setSortBy] =
    useState('rating')

  const [ratingFilter, setRatingFilter] =
    useState(0)

  const {
    movies,
    loading,
    totalPages,
  } = useMovies(
    query,
    page,
    sortBy,
    ratingFilter
  )

  const onSearch = () => {
    setQuery(searchInput)
    setPage(1)
  }

  return (
    <>
      <Header />

      <div className="home-container">
        <SearchBar
          value={searchInput}
          onChange={setSearchInput}
          onSearch={onSearch}
        />

        <div className="filters">
          <select
            onChange={event =>
              setSortBy(event.target.value)
            }
          >
            <option value="rating">
              Sort by Rating
            </option>

            <option value="release-date">
              Sort by Release Date
            </option>
          </select>

          <select
            onChange={event =>
              setRatingFilter(
                Number(event.target.value)
              )
            }
          >
            <option value="0">
              All Ratings
            </option>

            <option value="5">
              5+
            </option>

            <option value="7">
              7+
            </option>

            <option value="8">
              8+
            </option>
          </select>
        </div>

        {loading && <Loader />}

        {!loading && movies.length > 0 && (
          <>
            <MovieGrid movies={movies} />

            <Pagination
              currentPage={page}
              totalPages={totalPages}
              onPageChange={setPage}
            />
          </>
        )}

        {!loading && movies.length === 0 && (
          <EmptyState />
        )}
      </div>
    </>
  )
}

export default HomePage