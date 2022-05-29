const express = require('express')
const controller = require('./controller')
const response = require('../../network/response')

const router = express.Router()

router.get("/", (req, res) => {
    controller.getPosts()
        .then((data) => response.success(req, res, data, 200))
        .catch((e) => response.error(req, res, e, 'Error getting', 500))
})
router.get("/:id", (req, res) => {
    const { id } = req.params
    controller.getPost(id)
        .then((data) => response.success(req, res, data, 200))
        .catch((e) => response.error(req, res, e, 'Error getting one', 500))
})  
router.post("/", (req, res) => {
    const { title, description } = req.body
    controller.postPost(title, description, req)
        .then((data) => response.success(req, res, data, 201))
        .catch((e) => response.error(req, res, e, 'Error creating', 500))
})
router.delete("/:id", (req, res) => {
    const { id } = req.params
    controller.deletePost(id)
        .then((data) => response.success(req, res, data, 200))
        .catch((e) => response.error(req, res, e, 'Error deleting', 500))
})
router.put("/:id", (req, res) => {
    const { id } = req.params
    const { title, description, image } = req.body
    controller.putPost(id, title, description, image)
        .then((data) => response.success(req, res, data, 200))
        .catch((e) => response.error(req, res, e, 'Update error', 500))
})

module.exports = router