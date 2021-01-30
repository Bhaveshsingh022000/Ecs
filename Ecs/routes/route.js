const express = require('express');
const authController = require('../authController/auth');

const router = express.Router();

router.get('/', authController.getLogin);
router.post('/login', authController.postSignUp);

module.exports = router;