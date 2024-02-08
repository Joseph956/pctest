const express = require('express');
const router = express.Router();
// const auth = require('../middlware/auth');

const messCtrl = require('../controllers/messages');

router.post('/', messCtrl.createMessage);

module.exports = router