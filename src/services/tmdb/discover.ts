import tmdbFetch from "../../configs/tmdb.js";

export const discoverMovies = async (
  params: Record<string, string | number>,
) => {
  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    searchParams.append(key, String(value));
  });

  return tmdbFetch(`/discover/movie?${searchParams.toString()}`);
};
