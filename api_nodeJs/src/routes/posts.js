const { Router } =  require("express");
const { getAll, saveNew, update, deletePost } = require("../controllers/posts")

const router = Router()


// listar todos los post
router.get('/', getAll)

router.post('/save', saveNew)

router.put('/update', update)

router.delete('/delete/:id', deletePost)


module.exports = router