import tmdbFetch from "../../configs/tmdb.js";

export const searchPeople = async (query: string, page = 1) => {
  return tmdbFetch(
    `/search/person?query=${encodeURIComponent(query)}&page=${page}`,
  );
};

export const getPersonDetails = async (personId: number) => {
  return tmdbFetch(`/person/${personId}`);
};

export const getPersonCredits = async (personId: number) => {
  return tmdbFetch(`/person/${personId}/combined_credits`);
};

export const getPersonImages = async (personId: number) => {
  return tmdbFetch(`/person/${personId}/images`);
};
