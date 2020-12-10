const express = require("express");
const router = express.Router();
const controller = require('../controllers/tutoresController');

router.get('/', controller.getAll);
router.post('/', controller.create);
router.post('/login', controller.login);

module.exports = router;