const express = require('express');
const router = express.Router();
const auth = require('../middlware/auth');
const userCtrl = require('../controllers/users');

router.get('/', auth.token, userCtrl.getAllUsers);
router.get('/:id', auth.token, userCtrl.getOneUser);
router.get('/:id/publishedUser', auth.token, userCtrl.getPublishedUser);

module.exports = router