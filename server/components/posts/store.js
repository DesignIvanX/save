const Post = require("./model")
const uploadImage = require("../../libs/claudinary")

const getPosts = async () => {
    try {
        return await Post.find()
    }catch (e) {
        return new Error(e)
    }
}
const getPost = async (id) => {
    try {
        return await Post.findById(id)
    }catch (e) {
        return new Error(e)
    }
}
const postPost = async (post, req) => {
    try {
        if (req.files.image) {
            await uploadImage(req.files.image.tempFilePath)
        }
        await new Post(post).save()
        return { newPost: post }
    }catch (e) {
        return new Error(e)
    }
    
}
const deletePost = async (id) => {
    try {
        const postRemoved = await Post.deleteOne( { _id: id } )
        if (!postRemoved) return "Not found"
        return { postRemoved }
    }catch (e) {
        return new Error(e)
    }
}
const putPost = async (id, newValues) => {
    try {
        const postUpdated = await Post.findByIdAndUpdate(id, newValues)
        if (!postUpdated) return "Not found"
        return { newValues: { ...newValues }, oldValues: postUpdated }
    }catch (e) {
        return new Error(e)
    }
}

module.exports = { getPosts, getPost, postPost, deletePost, putPost }