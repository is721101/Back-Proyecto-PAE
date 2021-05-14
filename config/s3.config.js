const AWS = require('aws-sdk');

 
const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
	region : process.env.REGION,
    Bucket: process.env.process.BUCKET// change to yours
});

 
module.exports = s3;