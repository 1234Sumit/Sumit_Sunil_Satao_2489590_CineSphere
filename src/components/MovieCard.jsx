import { Link } from "react-router-dom";
 
export default function MovieCard({ movie }) {
  return (
    <Link to={`/movies/${movie.imdbID}`}>
      <div className="card">
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "https://picsum.photos/300/450"}
          alt={movie.Title}
        />
        <h3>{movie.Title}</h3>
      </div>
    </Link>
  );
}
 