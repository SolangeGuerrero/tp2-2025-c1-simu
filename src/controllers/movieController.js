import { getMovies, getMovieById, getMoviesByWinner, getMoviesLanguage, getMoviesByTomatoFresh } from "../services/movieService.js";

export const getAllMovies = async (req, res) => {
    try {
        const page = req.query.page ? parseInt(req.query.page) : undefined;
        const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : undefined;
        const movies = await getMovies(page, pageSize);
        res.json(movies);
    } catch (error) {
        console.log("Error fetching movies: ", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const getMovie = async (req, res) => {
    try {
        const movie = await getMovieById(req.params.id);
        if (!movie) {
            return res.status(404).json({ message: "Película no encontrada" });
        }
        res.json(movie);
    } catch (error) {
        console.log("Error fetching movie: ", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const getAllMoviesByWinner = async (req, res) => {
    try {
        const page = req.query.page ? parseInt(req.query.page) : undefined;
        const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : undefined;
        const movies = await getMoviesByWinner(page, pageSize);
        res.json(movies);
    } catch (error) {
        console.log("Error fetching movies: ", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const getMoviesByLanguage = async (req, res) => {
    try {
        const language = req.query.language;  // obtener idioma de query
        if (!language) {
            return res.status(400).json({ message: "Language query parameter is required" });
        }
        const page = req.query.page ? parseInt(req.query.page) : 1;
        const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 10;

        const movies = await getMoviesLanguage(language, page, pageSize);
        res.json(movies);
    } catch (error) {
        console.error("Error fetching movies by language:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const getMoviesRankingByFresh = async (req, res) => {
    try {
        const page = req.query.page;
        const pageSize = req.query.pageSize;
        const movies = await getMoviesByTomatoFresh(page, pageSize);
        res.json(movies);
    } catch (error) {
        console.error("Error fetching ranking: ", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
