import tmdbFetch from "../../configs/tmdb.js";

export const searchMovies = async (query: string, page = 1) => {
  return tmdbFetch(
    `/search/movie?query=${encodeURIComponent(query)}&page=${page}`,
  );
};

export const getMovieDetails = async (movieId: number) => {
  return tmdbFetch(`/movie/${movieId}`);
};

export const getMovieDetailsFull = async (movieId: number) => {
  return tmdbFetch(
    `/movie/${movieId}?append_to_response=credits,videos,images,recommendations,similar`,
  );
};

export const getTrendingMovies = async (
  timeWindow: "day" | "week" = "week",
) => {
  return tmdbFetch(`/trending/movie/${timeWindow}`);
};

export const getPopularMovies = async (page = 1) => {
  return tmdbFetch(`/movie/popular?page=${page}`);
};

export const getTopRatedMovies = async (page = 1) => {
  return tmdbFetch(`/movie/top_rated?page=${page}`);
};

export const getNowPlayingMovies = async (page = 1) => {
  return tmdbFetch(`/movie/now_playing?page=${page}`);
};

export const getUpcomingMovies = async (page = 1) => {
  return tmdbFetch(`/movie/upcoming?page=${page}`);
};

export const getMovieCredits = async (movieId: number) => {
  return tmdbFetch(`/movie/${movieId}/credits`);
};

export const getMovieVideos = async (movieId: number) => {
  return tmdbFetch(`/movie/${movieId}/videos`);
};

export const getMovieImages = async (movieId: number) => {
  return tmdbFetch(`/movie/${movieId}/images`);
};

export const getMovieRecommendations = async (movieId: number, page = 1) => {
  return tmdbFetch(`/movie/${movieId}/recommendations?page=${page}`);
};

export const getSimilarMovies = async (movieId: number, page = 1) => {
  return tmdbFetch(`/movie/${movieId}/similar?page=${page}`);
};
