const express = require('express');
const AuthController = require('../controllers/AuthController');
const UserService = require('../../../domain/services/UserService');
const UserRepositoryImpl = require('../../../infrastructure/persistence/repositories/UserRepositoryImpl');

const router = express.Router();
const userService = new UserService(new UserRepositoryImpl());
const authController = new AuthController(userService);

router.post('/register', (req, res) => authController.register(req, res));
router.post('/login', (req, res) => authController.login(req, res));

module.exports = router;
