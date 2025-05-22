import { getDb } from "./connection.js";
import { ObjectId } from "mongodb";

export async function findAllComments() {
    const db = getDb();
    const users = await db.collection("comments").find().toArray();
    console.log(users);
    return users;
}
export async function findCommentById(id) {
    const db = getDb();
    const user = await db.collection("comments").findOne({_id: new ObjectId(id)});
    console.log(user);
    return user;
}
