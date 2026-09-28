const TMDB_BASE_URL = process.env.TMDB_BASE_URL;

const tmdbFetch = async (endpoint: String) => {
  const response = await fetch(`${TMDB_BASE_URL}${endpoint}`, {
    headers: {
      Authorization: `Bearer ${process.env.TMDB_API_ACCESS_TOKEN}`,
      accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`TMDB request failed: ${response.status}`);
  }

  return response.json();
};

export default tmdbFetch;
