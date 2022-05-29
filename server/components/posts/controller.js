const store = require('./store')

const getPosts = () => {
    return new Promise((res, rej) => {
        return res(store.getPosts())
    })
}
const getPost = (id) => {
    return new Promise((res, rej) => {
        if (!id) {
            return rej('[ErrorControllerGetPost] - I need id')
        }
        return res(store.getPost(id))
    })
}
const postPost = async (title, description, req)  => {
  return new Promise((res, rej) => {
    if (!title || !description) {
        return rej('[ErrorControllerPost] - Title or description is undefined')
    }
    const newPost = { 
        title: title,
        description: description,
        image: req.files.image
    }
    return res(store.postPost(newPost, req))
  })
}
const deletePost = (id) =>  {
    return new Promise((res, rej) => {
        if (!id) {
            return rej('[ErrorControllerDeletePost] - Id is undefined')
        }
        return res(store.deletePost(id))
    })
}
const putPost = (id, title, description, image) => {
    return new Promise((res, rej) => {
        if (!id) {
            return rej('[ErrorControllerPutPost] - Id is undefined')
        }
        const newValues = { id, title, description, image }
        return res(store.putPost(id, newValues))
    })
}

module.exports = { getPosts, getPost, postPost, deletePost, putPost }