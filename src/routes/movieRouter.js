import express from "express";
import { getAllMovies, getMovie, getAllMoviesByWinner, getMoviesByLanguage, getMoviesRankingByFresh } from "../controllers/movieController.js";

const router = express.Router();
router.get("/", getAllMovies);
router.get("/winners", getAllMoviesByWinner);
router.get("/languages", getMoviesByLanguage);
router.get("/ranking", getMoviesRankingByFresh);
router.get("/:id", getMovie);

export default router;
