const cloudinary = require("cloudinary")

cloudinary.config({ 
    cloud_name: 'dwe1itfi3', 
    api_key: '718869932437515', 
    api_secret: 'GD_rbx669Jvs6t_q214n-tGAXds' 
  });

const uploadImage = async (filePath) => {
    return await cloudinary.v2.uploader.upload(filePath, {
        folder: 'test'
    })
}

module.exports = uploadImage