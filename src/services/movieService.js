import { findAllMovies, findMovieById, findMoviesByWinner, findMoviesByLanguage, findMoviesByTomatoFresh} from "../data/movieData.js";

export const getMovies = async (page, pageSize) => {
    return await findAllMovies(page, pageSize);
}

export const getMovieById = async (id) => {
    return await findMovieById(id);
}

export const getMoviesByWinner = async () => {
    return await findMoviesByWinner();
}

export const getMoviesLanguage = async (language, page, pageSize) => {
    return await findMoviesByLanguage(language, page, pageSize);
}

export const getMoviesByTomatoFresh = async (page, pageSize) => {
    return await findMoviesByTomatoFresh(page, pageSize);
};
