const { Schema, model } = require("mongoose")

const postSchema = new Schema ({
    title: { required: true, type: String, trim: true },
    description: { required: true, type: String, trim: true },
    image: { url: String, public_id: String }
}) 

const Post = model("Post", postSchema)

module.exports = Post