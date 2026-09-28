import type { Request, Response } from "express";

import {
  searchMovies,
  getMovieDetails,
  getMovieDetailsFull,
  getTrendingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getNowPlayingMovies,
  getUpcomingMovies,
  getMovieCredits,
  getMovieVideos,
  getMovieImages,
  getMovieRecommendations,
  getSimilarMovies,
} from "../services/tmdb/movie.js";

import {
  searchTV,
  getTVDetails,
  getTVDetailsFull,
  getTrendingTV,
  getPopularTV,
  getTopRatedTV,
} from "../services/tmdb/tv.js";

import {
  searchPeople,
  getPersonDetails,
  getPersonCredits,
  getPersonImages,
} from "../services/tmdb/person.js";

import { discoverMovies } from "../services/tmdb/discover.js";

import { getMovieGenres, getTVGenres } from "../services/tmdb/genre.js";

const getId = (req: Request, res: Response) => {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    res.status(400).json({
      message: "Invalid ID",
    });

    return null;
  }

  return id;
};

/*
|--------------------------------------------------------------------------
| Movie controllers
|--------------------------------------------------------------------------
*/

// Search movies
export const searchMovieController = async (req: Request, res: Response) => {
  try {
    const { q, page = "1" } = req.query;

    if (!q || typeof q !== "string") {
      return res.status(400).json({
        message: "Search query is required",
      });
    }

    const data = await searchMovies(q, Number(page));

    return res.status(200).json(data);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Failed to search movies",
    });
  }
};

// Trending movies
export const trendingMoviesController = async (req: Request, res: Response) => {
  try {
    const { window = "week" } = req.query;

    const timeWindow = window === "day" ? "day" : "week";

    const data = await getTrendingMovies(timeWindow);

    return res.status(200).json(data);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Failed to fetch trending movies",
    });
  }
};

// Popular movies
export const popularMoviesController = async (req: Request, res: Response) => {
  try {
    const page = Number(req.query.page) || 1;

    const data = await getPopularMovies(page);

    return res.status(200).json(data);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Failed to fetch popular movies",
    });
  }
};

// Top rated movies
export const topRatedMoviesController = async (req: Request, res: Response) => {
  try {
    const page = Number(req.query.page) || 1;

    const data = await getTopRatedMovies(page);

    return res.status(200).json(data);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Failed to fetch top rated movies",
    });
  }
};

// Now Playing
export const nowPlayingMoviesController = async (
  req: Request,
  res: Response,
) => {
  try {
    const page = Number(req.query.page) || 1;

    const data = await getNowPlayingMovies(page);

    return res.status(200).json(data);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Failed to fetch now playing movies",
    });
  }
};

// Upcoming
export const upcomingMoviesController = async (req: Request, res: Response) => {
  try {
    const page = Number(req.query.page) || 1;

    const data = await getUpcomingMovies(page);

    return res.status(200).json(data);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Failed to fetch upcoming movies",
    });
  }
};

// Movie details
export const movieDetailsController = async (req: Request, res: Response) => {
  try {
    const id = getId(req, res);

    if (id === null) return;

    const data = await getMovieDetails(id);

    return res.status(200).json(data);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Failed to fetch movie details",
    });
  }
};

// Full movie details
export const movieDetailsFullController = async (
  req: Request,
  res: Response,
) => {
  try {
    const id = getId(req, res);

    if (id === null) return;

    const data = await getMovieDetailsFull(id);

    return res.status(200).json(data);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Failed to fetch movie details",
    });
  }
};

// Movie credits
export const movieCreditsController = async (req: Request, res: Response) => {
  try {
    const id = getId(req, res);

    if (id === null) return;

    const data = await getMovieCredits(id);

    return res.status(200).json(data);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Failed to fetch movie credits",
    });
  }
};

// Movie videos
export const movieVideosController = async (req: Request, res: Response) => {
  try {
    const id = getId(req, res);

    if (id === null) return;

    const data = await getMovieVideos(id);

    return res.status(200).json(data);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Failed to fetch movie videos",
    });
  }
};

// Movie images
export const movieImagesController = async (req: Request, res: Response) => {
  try {
    const id = getId(req, res);

    if (id === null) return;

    const data = await getMovieImages(id);

    return res.status(200).json(data);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Failed to fetch movie images",
    });
  }
};

// Recommendations
export const movieRecommendationsController = async (
  req: Request,
  res: Response,
) => {
  try {
    const id = getId(req, res);

    if (id === null) return;

    const page = Number(req.query.page) || 1;

    const data = await getMovieRecommendations(id, page);

    return res.status(200).json(data);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Failed to fetch movie recommendations",
    });
  }
};

// Similar movies
export const similarMoviesController = async (req: Request, res: Response) => {
  try {
    const id = getId(req, res);

    if (id === null) return;

    const page = Number(req.query.page) || 1;

    const data = await getSimilarMovies(id, page);

    return res.status(200).json(data);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Failed to fetch similar movies",
    });
  }
};

/*
|--------------------------------------------------------------------------
| TV controllers
|--------------------------------------------------------------------------
*/

// Search TV
export const searchTVController = async (req: Request, res: Response) => {
  try {
    const { q, page = "1" } = req.query;

    if (!q || typeof q !== "string") {
      return res.status(400).json({
        message: "Search query is required",
      });
    }

    const data = await searchTV(q, Number(page));

    return res.status(200).json(data);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Failed to search TV shows",
    });
  }
};

// TV details
export const tvDetailsController = async (req: Request, res: Response) => {
  try {
    const id = getId(req, res);

    if (id === null) return;

    const data = await getTVDetails(id);

    return res.status(200).json(data);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Failed to fetch TV details",
    });
  }
};

// Full TV details
export const tvDetailsFullController = async (req: Request, res: Response) => {
  try {
    const id = getId(req, res);

    if (id === null) return;

    const data = await getTVDetailsFull(id);

    return res.status(200).json(data);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Failed to fetch TV details",
    });
  }
};

// Trending TV
export const trendingTVController = async (req: Request, res: Response) => {
  try {
    const { window = "week" } = req.query;

    const timeWindow = window === "day" ? "day" : "week";

    const data = await getTrendingTV(timeWindow);

    return res.status(200).json(data);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Failed to fetch trending TV shows",
    });
  }
};

// Popular TV
export const popularTVController = async (req: Request, res: Response) => {
  try {
    const page = Number(req.query.page) || 1;

    const data = await getPopularTV(page);

    return res.status(200).json(data);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Failed to fetch popular TV shows",
    });
  }
};

// Top rated TV
export const topRatedTVController = async (req: Request, res: Response) => {
  try {
    const page = Number(req.query.page) || 1;

    const data = await getTopRatedTV(page);

    return res.status(200).json(data);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Failed to fetch top rated TV shows",
    });
  }
};

/*
|--------------------------------------------------------------------------
| Person controllers
|--------------------------------------------------------------------------
*/

// Search people
export const searchPeopleController = async (req: Request, res: Response) => {
  try {
    const { q, page = "1" } = req.query;

    if (!q || typeof q !== "string") {
      return res.status(400).json({
        message: "Search query is required",
      });
    }

    const data = await searchPeople(q, Number(page));

    return res.status(200).json(data);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Failed to search people",
    });
  }
};

// Person details
export const personDetailsController = async (req: Request, res: Response) => {
  try {
    const id = getId(req, res);

    if (id === null) return;

    const data = await getPersonDetails(id);

    return res.status(200).json(data);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Failed to fetch person details",
    });
  }
};

// Person credits
export const personCreditsController = async (req: Request, res: Response) => {
  try {
    const id = getId(req, res);

    if (id === null) return;

    const data = await getPersonCredits(id);

    return res.status(200).json(data);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Failed to fetch person credits",
    });
  }
};

// Person images
export const personImagesController = async (req: Request, res: Response) => {
  try {
    const id = getId(req, res);

    if (id === null) return;

    const data = await getPersonImages(id);

    return res.status(200).json(data);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Failed to fetch person images",
    });
  }
};

/*
|--------------------------------------------------------------------------
| Discover Controller
|--------------------------------------------------------------------------
*/

export const discoverMoviesController = async (req: Request, res: Response) => {
  try {
    const params: Record<string, string> = {};

    for (const [key, value] of Object.entries(req.query)) {
      if (typeof value === "string") {
        params[key] = value;
      }
    }

    const data = await discoverMovies(params);

    return res.status(200).json(data);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Failed to discover movies",
    });
  }
};

/*
|--------------------------------------------------------------------------
| Genre controllers
|--------------------------------------------------------------------------
*/

// Movie genre
export const movieGenresController = async (_req: Request, res: Response) => {
  try {
    const data = await getMovieGenres();

    return res.status(200).json(data);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Failed to fetch movie genres",
    });
  }
};

// TV genre
export const tvGenresController = async (_req: Request, res: Response) => {
  try {
    const data = await getTVGenres();

    return res.status(200).json(data);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Failed to fetch TV genres",
    });
  }
};
