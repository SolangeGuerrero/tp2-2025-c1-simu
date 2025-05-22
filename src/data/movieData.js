import { getDb } from "./connection.js";
import { ObjectId } from "mongodb";

export async function findAllMovies(page, pageSize) {
    const db = getDb();
    if (page && pageSize) {
        const skip = (page - 1) * pageSize;
        const movies = await db.collection("movies")
            .find()
            .skip(skip)
            .limit(pageSize)
            .toArray();
        return movies;
    } else {
        // Sin paginación: trae todas las películas
        const movies = await db.collection("movies").find().toArray();
        return movies;
    }
}

export async function findMovieById(id) {
    const db = getDb();
    const movie = await db.collection("movies").findOne({ _id: new ObjectId(id) });
    return movie;
}

export async function findMoviesByWinner(page, pageSize) {
    const db = getDb();
    const query = { "awards.wins": { $gt: 0 } };

    page = parseInt(page);
    pageSize = parseInt(pageSize);

    if (isNaN(page) || page < 1) page = 1;
    if (isNaN(pageSize) || pageSize < 1) pageSize = 10;  // o el valor que quieras

    const skip = (page - 1) * pageSize;

    const movies = await db
        .collection("movies")
        .find(query)
        .project({
            title: 1,
            poster: 1,
            plot: 1,
            _id: 0  
        })
        .limit(pageSize)
        .toArray();

    return movies;
}

export async function findMoviesByLanguage(language, page, pageSize) {
    const db = getDb();
    const query = { languages: language }; 

    page = parseInt(page);
    pageSize = parseInt(pageSize);

    if (isNaN(page) || page < 1) page = 1;
    if (isNaN(pageSize) || pageSize < 1) pageSize = 10;

    const skip = (page - 1) * pageSize;

    const movies = await db
        .collection("movies")
        .find(query)
        .skip(skip)
        .limit(pageSize)
        .toArray();

    return movies;
}

export async function findMoviesByTomatoFresh(page, pageSize) {
    const db = getDb();
    page = parseInt(page);
    pageSize = parseInt(pageSize);

    if (isNaN(page) || page < 1) page = 1;
    if (isNaN(pageSize) || pageSize < 1) pageSize = 10;

    const skip = (page - 1) * pageSize;

    const movies = await db.collection("movies")
        .find({ "tomatoes.fresh": { $exists: true } }) // solo con ese campo
        .sort({ "tomatoes.fresh": -1 })                // orden descendente
        .skip(skip)
        .limit(pageSize)
        .project({
            title: 1,
            poster: 1,
            plot: 1,
            "tomatoes.fresh": 1
        })
        .toArray();

    return movies;
}
