import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SearchBar from '../components/SearchBar/SearchBar'

describe('SearchBar', () => {
  test('renders input correctly', () => {
    render(
      <SearchBar
        value=""
        onChange={() => {}}
        onSearch={() => {}}
      />
    )

    expect(
      screen.getByPlaceholderText(
        'Search movie...'
      )
    ).toBeInTheDocument()
  })

  test('calls search button', async () => {
    const onSearch = vi.fn()

    render(
      <SearchBar
        value=""
        onChange={() => {}}
        onSearch={onSearch}
      />
    )

    const button =
      screen.getByText('Search!')

    await userEvent.setup().click(button)

    expect(onSearch).toHaveBeenCalled()
  })
})