const express = require('express');
const router = express.Router();
const auth = require('../middlware/auth');
const userCtrl = require('../controllers/users');

router.get('/', userCtrl.getAllUsers);
// router.get('/:id', auth.token, userCtrl.getOneUser);
// router.get('/:id/PublishedUser', auth.token, userCtrl.getPublishedUser);

module.exports = router