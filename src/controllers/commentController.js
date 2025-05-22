import { getComments, getCommentById} from '../services/commentServicie.js'; 

export const getAllComments = async (req, res) => {
    try {
        const page = req.query.page || 1;
        const pageSize = req.query.pageSize || 10;
        const comments = await getComments(page, pageSize);
        res.json(comments);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener los comentarios' });
    }
};

export const getComment = async (req, res) => {
    try {
        const comment = await getCommentById(req.params.id);
        if (!comment) {
            return res.status(404).json({ message: 'Comentario no encontrado' });
        }
        res.json(comment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener el comentario' });
    }
};
