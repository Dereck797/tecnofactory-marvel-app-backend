const UserRepository = require('../../../domain/repositories/UserRepository');
const UserEntity = require('../schemas/UserSchema');

class UserRepositoryImpl extends UserRepository {
  async save(user) {
    const newUser = new UserEntity({
      name: user.name,
      email: user.email,
      password: user.password
    });
    await newUser.save();
    return newUser;
  }

  async findByEmail(email) {
    return await UserEntity.findOne({ email });
  }
}

module.exports = UserRepositoryImpl;
