import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { getMovie } from "../api/api";
import { WatchlistContext } from "../context/WatchlistContext";
import { AuthContext } from "../context/AuthContext";

export default function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const { watchlist, addToWatchlist, removeFromWatchlist } =
    useContext(WatchlistContext);

  const { user } = useContext(AuthContext);
  const [authMessage, setAuthMessage] = useState("");

  const isAdded = watchlist.some((m) => m.imdbID === id);

  useEffect(() => {
    getMovie(id).then(setMovie);
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="detail">

      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "https://picsum.photos/300/450"}
        alt={movie.Title}
      />

      <div>
        <h2>{movie.Title}</h2>

        <p>{movie.Plot}</p>

        <p>⭐ {movie.imdbRating}</p>


        <button
          className={isAdded ? "added-btn" : "add-btn"}
          onClick={() => {
            if (!user) {
              setAuthMessage("Please log in first to add movies to your watchlist.");
              return;
            }
            setAuthMessage("");
            isAdded
              ? removeFromWatchlist(movie.imdbID)
              : addToWatchlist(movie);
          }}
        >
          {isAdded ? "✔ Added" : "+ Add to Watchlist"}
        </button>
        {authMessage && <p className="auth-message">{authMessage}</p>}
      </div>
    </div>
  );
}
