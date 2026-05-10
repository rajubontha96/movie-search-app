import './SearchBar.css'

interface Props {
  value: string
  onChange: (value: string) => void
  onSearch: () => void
}

const SearchBar = ({
  value,
  onChange,
  onSearch,
}: Props) => {
  return (
    <div className="search-container">
      <label className="label">MOVIE NAME</label>

      <input
        type="text"
        value={value}
        placeholder="Search movie..."
        className="search-input"
        onChange={event => onChange(event.target.value)}
      />

      <button
        className="search-button"
        onClick={onSearch}
      >
        Search!
      </button>
    </div>
  )
}

export default SearchBar