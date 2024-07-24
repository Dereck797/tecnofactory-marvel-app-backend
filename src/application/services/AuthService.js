const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UserService = require('../../domain/services/UserService');

class AuthService {
  constructor(userRepository) {
    this.userService = new UserService(userRepository);
  }

  async registerUser(id, name, email, password) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await this.userService.registerUser(id, name, email, hashedPassword);
    const token = this.generateToken(user.id);
    return { user: this.filterUserData(user), token };
  }

  async loginUser(email, password) {
    const user = await this.userService.authenticateUser(email, password);
    const token = this.generateToken(user.id);
    return { user: this.filterUserData(user), token };
  }

  generateToken(userId) {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '1h' });
  }

  filterUserData(user) {
    return {
      id: user.id,
      name: user.name,
      email: user.email
    };
  }
}

module.exports = AuthService;
