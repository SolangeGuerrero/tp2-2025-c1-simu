import { findAllComments, findCommentById } from "../data/commentData.js";

export const getComments = async (page, pageSize) => {
    return await findAllComments(page, pageSize);
}
export const getCommentById = async (id) => {
    return await findCommentById(id);
}