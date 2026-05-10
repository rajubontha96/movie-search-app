import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">
          Movie Search App
        </h1>

        <p className="header-description">
          Search your favourite movies using
          TMDB API
        </p>
      </div>
    </header>
  )
}

export default Header