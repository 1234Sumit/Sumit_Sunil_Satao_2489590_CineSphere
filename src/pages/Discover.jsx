import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { searchMovies } from "../api/api";
import MovieCard from "../components/MovieCard";
 
export default function Discover() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
 
 
  const query = new URLSearchParams(location.search).get("search");
 
  useEffect(() => {
    const fetchData = async () => {
      
      const searchTerm = query && query.trim() !== "" ? query : "batman";
 
      const data = await searchMovies(searchTerm);
      setMovies(data);
    };
 
    fetchData();
  }, [query]);
 
  return (
    <div className="grid">
      {movies.length === 0 ? (
        <p>No movies found</p>
      ) : (
        movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))
      )}
    </div>
  );
}
 