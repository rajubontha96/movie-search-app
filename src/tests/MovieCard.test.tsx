import { render, screen } from '@testing-library/react'
import { describe, expect, test } from '@jest/globals'
import MovieCard from '../components/MovieCard/MovieCard'

describe('MovieCard', () => {
  test('renders movie details', () => {
    render(
      <MovieCard
        movie={{
          id: 1,
          title: 'Avatar',
          overview: 'Movie overview',
          poster_path: '/abc.jpg',
          release_date: '2024-01-01',
          vote_average: 8,
        }}
      />
    )

    expect(
      screen.getByText('Avatar')
    ).toBeInTheDocument()
  })
})