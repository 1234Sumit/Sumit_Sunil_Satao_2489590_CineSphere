# CineSphere

A React + Vite movie discovery app with authentication, a watchlist, and OMDB API integration.

## Project Description

CineSphere is a single-page application that lets users explore movie search results, view movie details, and save favorites to a personal watchlist. The watchlist route is protected behind a simple login flow, and the app uses the OMDB API to fetch movie data.

## Setup

1. Clone the repository:

	```bash
	git clone https://github.com/1234Sumit/Sumit_Sunil_Satao_2489590_CineSphere.git
	cd Sumit_Sunil_Satao_2489590_CineSphere
	```

2. Install dependencies:

	```bash
	npm install
	```

3. Create environment variables (if using a custom OMDB key):

	```env
	VITE_OMDB_API_KEY=your_api_key_here
	```

4. Start the development server:

	```bash
	npm run dev
	```

5. Open the app in your browser at the local Vite URL shown in the terminal.

## Environment Variables

The app expects the following environment variable when using a custom OMDB API key:

- `VITE_OMDB_API_KEY` — your OMDB API key.

If no environment variable is configured, the repo uses the API key defined in `src/api/api.js`.

## Demo Credentials

Use the following credentials to sign in to the protected watchlist area:

- Email: `movie@demo.com`
- Password: `cine123`

## Deployed App

Access the deployed app here:

https://github.com/1234Sumit/Sumit_Sunil_Satao_2489590_CineSphere

## Features

- Search and browse movies using the OMDB API
- View detailed movie information
- Add or remove movies from a personal watchlist
- Protect the watchlist route with authentication
- Persist login state with `localStorage`

## Project Structure

- `src/App.jsx` — main router configuration
- `src/main.jsx` — app entry point and context providers
- `src/api/api.js` — OMDB API helper
- `src/context/AuthContext.jsx` — authentication context
- `src/context/WatchlistContext.jsx` — watchlist state
- `src/components/Header.jsx` — app navigation and auth links
- `src/components/ProtectedRoute.jsx` — route guard
- `src/pages/Discover.jsx` — movie listing page
- `src/pages/Login.jsx` — login page
- `src/pages/MovieDetail.jsx` — movie details page
- `src/pages/Watchlist.jsx` — protected watchlist page
- `src/styles/main.css` — global styles

## Notes

- The watchlist is managed in client state and is not persisted across page refreshes.
- Authentication is handled in `src/context/AuthContext.jsx` with a demo email/password login.
- Movie data is loaded from the OMDB API.
