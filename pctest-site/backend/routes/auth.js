const express = require('express');
const router = express.Router();
const authCtrl = require('../controllers/auth');
const auth = require('../middlware/auth');


router.post('/register', authCtrl.signUp);
module.exports = router