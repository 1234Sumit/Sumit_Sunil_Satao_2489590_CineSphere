import { createContext, useState } from "react";
 
export const WatchlistContext = createContext();
 
export const WatchlistProvider = ({ children }) => {
  const [watchlist, setWatchlist] = useState([]);
 
  const addToWatchlist = (movie) => {
    setWatchlist((prev) => {
      const exists = prev.find(
        (m) => m.imdbID === movie.imdbID
      );
      if (exists) return prev;
      return [...prev, movie];
    });
  };
 
  const removeFromWatchlist = (id) => {
    setWatchlist((prev) =>
      prev.filter((m) => m.imdbID !== id)
    );
  };
 
  return (
    <WatchlistContext.Provider
      value={{ watchlist, addToWatchlist, removeFromWatchlist }}
    >
      {children}
    </WatchlistContext.Provider>
  );
};
 