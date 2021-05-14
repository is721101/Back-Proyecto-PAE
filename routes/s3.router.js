let express = require('express');
let router = express.Router();
 
let upload = require('../config/multer.config.js');

const awsWorker = require('../controllers/s3.controller.js');
 
router.post('/upload', upload.single("file"), awsWorker.doUpload);

router.get('/all', awsWorker.listKeyNames);

router.get('/:filename', awsWorker.doDownload);
 
module.exports = router;