const API_KEY = "5f564d0c";

export const searchMovies = async (query) => {
  const res = await fetch(
    `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`
  );
  const data = await res.json();
  return data.Search || [];
};

export const getMovie = async (id) => {
  const res = await fetch(
    `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`
  );
  return await res.json();
};
