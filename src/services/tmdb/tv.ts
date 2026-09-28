import tmdbFetch from "../../configs/tmdb.js";

export const searchTV = async (query: string, page = 1) => {
  return tmdbFetch(
    `/search/tv?query=${encodeURIComponent(query)}&page=${page}`,
  );
};

export const getTVDetails = async (tvId: number) => {
  return tmdbFetch(`/tv/${tvId}`);
};

export const getTVDetailsFull = async (tvId: number) => {
  return tmdbFetch(
    `/tv/${tvId}?append_to_response=credits,videos,images,recommendations,similar`,
  );
};

export const getTrendingTV = async (timeWindow: "day" | "week" = "week") => {
  return tmdbFetch(`/trending/tv/${timeWindow}`);
};

export const getPopularTV = async (page = 1) => {
  return tmdbFetch(`/tv/popular?page=${page}`);
};

export const getTopRatedTV = async (page = 1) => {
  return tmdbFetch(`/tv/top_rated?page=${page}`);
};
