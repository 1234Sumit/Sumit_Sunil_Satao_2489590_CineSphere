import { useContext } from "react";
import { WatchlistContext } from "../context/WatchlistContext";
 
export default function Watchlist() {
  const { watchlist, removeFromWatchlist } = useContext(WatchlistContext);
 
  return (
    <div className="container">
      <h2>Your Watchlist</h2>
 
      {watchlist.length === 0 ? (
        <p>No movies added</p>
      ) : (
        <div className="grid">
          {watchlist.map((movie) => (
            <div className="card" key={movie.imdbID}>
              
           
              <img
                src={
                  movie.Poster !== "N/A"
                    ? movie.Poster
                    : "https://picsum.photos/300/450"
                }
                alt={movie.Title}
              />
 
              <h3>{movie.Title}</h3>
 
             
              <button
                className="remove-btn"
                onClick={() => removeFromWatchlist(movie.imdbID)}
              >
                ❌ Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
 