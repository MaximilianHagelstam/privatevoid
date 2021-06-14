const express = require('express');
const homeController = require('../controllers/homeController');
const authCheck = require('../middleware/authCheck');

const router = express.Router();

router.get('/', homeController.sayHello);

router.get('/profile', authCheck, homeController.profile);

module.exports = router;
