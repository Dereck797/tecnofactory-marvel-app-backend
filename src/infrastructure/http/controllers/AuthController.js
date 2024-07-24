const AuthService = require('../../../application/services/AuthService');
const UserRepositoryImpl = require('../../../infrastructure/persistence/repositories/UserRepositoryImpl');

class AuthController {
  constructor() {
    const userRepository = new UserRepositoryImpl();
    this.authService = new AuthService(userRepository);
  }

  async register(req, res) {
    const { id, name, email, password } = req.body;
    try {
      const { user, token } = await this.authService.registerUser(id, name, email, password);
      res.status(201).json({ message: 'User registered successfully', user, token });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async login(req, res) {
    const { email, password } = req.body;
    try {
      const { user, token } = await this.authService.loginUser(email, password);
      res.status(200).json({ message: 'Login successful', user, token });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = AuthController;
