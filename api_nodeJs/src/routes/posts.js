const { Router } =  require("express");
const { getAllPosts, saveNewPost, updatePost, deletePost } = require("../request/request")

const router = Router()


// listar todos los post
router.get('/', getAllPosts)

router.post('/save', saveNewPost)

router.put('/update', updatePost)

router.delete('/delete/:id', deletePost)


module.exports = router