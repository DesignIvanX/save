const posts = require('../components/posts/network')

const router = (server) => {
    server.use("/api/posts", posts)
}

module.exports = router