const s3 = require('../aws')

const upload = async (imageData) => {
  const fileUpload = await s3.upload(imageData).promise()
  return fileUpload.Location
}

const deleteImage = async (imageData) => {}

module.exports = {
  upload,
  deleteImage
}
