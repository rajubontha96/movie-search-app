# Movie Search App

A modern and responsive Movie Search Application built using React, TypeScript, Vite, and The Movie Database (TMDB) API.

This application allows users to:
- Search movies by name
- Sort movies by rating or release date
- Filter movies by rating
- Navigate through paginated results

---

# Features

- Search movies by movie name
- TMDB API integration
- Pagination support
- Sort movies by:
  - Rating
  - Release Date
- Filter movies by minimum rating
- Responsive UI
- Reusable components
- Custom hooks
- TypeScript support
- Unit testing using Vitest and React Testing Library
- Clean scalable folder structure

---

# Tech Stack

- React
- TypeScript
- Vite
- Axios
- Vitest
- React Testing Library
- CSS3

---

# API Information

TMDB API Base URL:

```txt
https://api.themoviedb.org/3
```

Search API Example:

```txt
https://api.themoviedb.org/3/search/movie?api_key=API_KEY&query=Jack
```

---

# Environment Variables

Create a `.env` file in the project root and add:

```env
VITE_TMDB_API_KEY=a10b2c63c3d21ee6d9f82980d47a6589
VITE_TMDB_BASE_URL=https://api.themoviedb.org/3
```

---

# Installation

Clone the repository:

```bash
git clone <repository-url>
```

Move into project folder:

```bash
cd movie-search-app
```

Install dependencies:

```bash
npm install
```

---

# Running the Project

Start development server:

```bash
npm run dev
```

Application runs at:

```txt
http://localhost:5173
```

---

# Build for Production

```bash
npm run build
```

---

# Preview Production Build

```bash
npm run preview
```

---

# Run Unit Tests

```bash
npm run test
```

---

# Project Structure

```txt
movie-search-app/
│
├── public/
│
├── src/
│   ├── api/
│   ├── components/
│   │   ├── EmptyState/
│   │   ├── Header/
│   │   ├── Loader/
│   │   ├── MovieCard/
│   │   ├── MovieGrid/
│   │   ├── Pagination/
│   │   └── SearchBar/
│   │
│   ├── hooks/
│   ├── pages/
│   ├── services/
│   ├── tests/
│   ├── types/
│   ├── utils/
│   │
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── vite-env.d.ts
│
├── .env
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

# Functionalities Implemented

## Search Movies
Users can search movies by entering a movie name.

## Pagination
Users can navigate between movie result pages.

## Sorting
Movies can be sorted by:
- Rating
- Release Date

## Rating Filter
Users can filter movies based on minimum rating.

## Responsive Design
The application works smoothly across:
- Mobile Devices
- Tablets
- Desktop Screens

---

# Testing

Unit tests are implemented using:
- Vitest
- React Testing Library

Tested Components:
- SearchBar
- MovieCard

---

# Coding Standards

- Reusable components
- Reusable utility functions
- Type-safe development using TypeScript
- Functional components with hooks
- Clean and scalable architecture
- Separation of concerns

---

# Future Improvements

- Add debounce search
- Add dark mode
- Add movie details page
- Add favorites/watchlist
- Add skeleton loaders
- Add infinite scrolling

---

# Author

Prince Raja