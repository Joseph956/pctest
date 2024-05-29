const express = require('express');
const router = express.Router();
const authCtrl = require('../controllers/auth');
const auth = require('../middlware/auth');

router.post('/register', auth.email, auth.passwd, authCtrl.signUp);
router.post('/login', auth.email, auth.passwd, authCtrl.signIn);
module.exports = router