import { Router } from "express";

import {
  searchMovieController,
  trendingMoviesController,
  popularMoviesController,
  topRatedMoviesController,
  nowPlayingMoviesController,
  upcomingMoviesController,
  movieDetailsController,
  movieDetailsFullController,
  movieCreditsController,
  movieVideosController,
  movieImagesController,
  movieRecommendationsController,
  similarMoviesController,
  searchTVController,
  tvDetailsController,
  tvDetailsFullController,
  trendingTVController,
  popularTVController,
  topRatedTVController,
  searchPeopleController,
  personDetailsController,
  personCreditsController,
  personImagesController,
  discoverMoviesController,
  movieGenresController,
  tvGenresController,
} from "../controllers/tmdb.controller.js";

const router = Router();

/*
|--------------------------------------------------------------------------
| Movies
|--------------------------------------------------------------------------
*/


router.get("/movies/trending", trendingMoviesController);

router.get("/movies/search", searchMovieController);

router.get("/movies/popular", popularMoviesController);

router.get("/movies/top-rated", topRatedMoviesController);

router.get("/movies/now-playing", nowPlayingMoviesController);

router.get("/movies/upcoming", upcomingMoviesController);

router.get("/movies/:id/full", movieDetailsFullController);

router.get("/movies/:id/credits", movieCreditsController);

router.get("/movies/:id/videos", movieVideosController);

router.get("/movies/:id/images", movieImagesController);

router.get("/movies/:id/recommendations", movieRecommendationsController);

router.get("/movies/:id/similar", similarMoviesController);

router.get("/movies/:id", movieDetailsController);

/*
|--------------------------------------------------------------------------
| TV
|--------------------------------------------------------------------------
*/

router.get("/tv/trending", trendingTVController);

router.get("/tv/search", searchTVController);

router.get("/tv/popular", popularTVController);

router.get("/tv/top-rated", topRatedTVController);

router.get("/tv/:id/full", tvDetailsFullController);

router.get("/tv/:id", tvDetailsController);

/*
|--------------------------------------------------------------------------
| People
|--------------------------------------------------------------------------
*/

router.get("/people/search", searchPeopleController);

router.get("/people/:id/credits", personCreditsController);

router.get("/people/:id/images", personImagesController);

router.get("/people/:id", personDetailsController);

/*
|--------------------------------------------------------------------------
| Discover
|--------------------------------------------------------------------------
*/

router.get("/discover/movies", discoverMoviesController);

/*
|--------------------------------------------------------------------------
| Genres
|--------------------------------------------------------------------------
*/

router.get("/genres/movies", movieGenresController);

router.get("/genres/tv", tvGenresController);

export default router;
