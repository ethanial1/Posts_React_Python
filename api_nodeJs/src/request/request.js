const { post, Op } = require('../database/db')

const getAllPosts = async (req, res) => {
    try {
        const posts = await post.findAll({
            attributes: ['id','nombre', 'descrip'],
        })

        return res.json(posts)
    } catch (error) {
        res.status(500).json("error")
    }
}

const saveNewPost = async (req, res) => {
    try {
        const { nombre, descrip } = req.body;
        if(!nombre || !descrip) throw new Error("datos requeridos");

        const newPost = await post.create({nombre, descrip})

        res.json(newPost)
    } catch (error) {
        res.status(400).json({msg: "Error al guardad, no se enviaron los datos necesarios"})
    }
}

const deletePost = async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);
        if (Number.isNaN(id)) return res.status(400).json({msg: "id debe de ser un número"});

        const deletedPost = await post.findOne({where: {id}})

        if(!deletedPost) return res.status(400).json({msg: `No existe el post con id ${id}`})

        deletedPost.destroy();
        res.json(deletedPost)
    } catch (error) {
        res.status(500).json({msg: "Error al eliminar"})
    }
}


module.exports = {
    getAllPosts,
    saveNewPost,
    deletePost
}