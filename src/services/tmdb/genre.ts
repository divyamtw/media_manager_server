import tmdbFetch from "../../configs/tmdb.js";

export const getMovieGenres = async () => {
  return tmdbFetch("/genre/movie/list");
};

export const getTVGenres = async () => {
  return tmdbFetch("/genre/tv/list");
};
