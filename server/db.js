const mongoose = require('mongoose')

// URI  
const URI_DB = process.env.DB_NAME

// Mongoose
mongoose.connect(URI_DB)
.then(() => console.log("DB IS CONNECT"))
.catch((e) => console.log(e, "Error DB connect"))


module.exports = mongoose