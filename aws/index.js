const { S3 } = require('aws-sdk')
require('dotenv').config()

const s3 = new S3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET
})

module.exports = s3
