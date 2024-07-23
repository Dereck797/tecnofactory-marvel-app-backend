const bcrypt = require('bcryptjs');
const User = require('../entities/User');

class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async registerUser(name, email, password) {
    const user = new User(null, name, email, password);
    await this.userRepository.save(user);
    return user;
  }

  async authenticateUser(email, password) {
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new Error('Invalid credentials');
    }
    const isMatch = await bcrypt.compare(password, user.password);
    console.log(isMatch);
    if (!isMatch) {
      throw new Error('Invalid credentials');
    }
    return user;
  }
}

module.exports = UserService;
