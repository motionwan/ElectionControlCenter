require('dotenv').config();
const Users = require('./users.mongo');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET_KEY;

//create user
const createUser = async (fullName, username, email, role, password) => {
  password = await bcrypt.hash(password, 10);
  try {
    return await Users.create({
      fullName,
      username,
      email,
      role,
      password,
    });
  } catch (err) {
    if (err.code === 11000) {
      return {
        message: 'Email address or username currently in use',
      };
    }
    throw e;
  }
};

// sign in user

const signInUser = async (email, password) => {
  const user = await Users.findOne({ email }).lean();
  if (!user) {
    return { message: 'invalid email or password' };
  }

  if (await bcrypt.compare(password, user.password)) {
    // return user
    // assign a jwt token to user
    const token = jwt.sign(
      {
        email: user.email,
        id: user._id,
      },
      jwtSecret
    );
    if (user.role === 'national_admin') {
      return {
        token: token,
        email: user.email,
        user: user.username,
        fullName: user.fullName,
        role: 'National Headquarters',
        id: user._id,
      };
    } else if (user.role === 'regional_admin') {
      return {
        token: token,
        email: user.email,
        user: user.username,
        fullName: user.fullName,
        role: 'Regional Headquarters',
        id: user._id,
      };
    } else if (user.role === 'constituency_admin') {
      return {
        token: token,
        email: user.email,
        user: user.username,
        fullName: user.fullName,
        role: 'Constituency Office',
        id: user._id,
      };
    } else {
      return {
        token: token,
        email: user.email,
        user: user.username,
        fullName: user.fullName,
        role: 'Poling Station Agent',
        id: user._id,
      };
    }
  } else {
    return { message: 'Invalid email or password' };
  }
};

//delete user
const deleteUser = async (id) => {
  return await Users.findByIdAndDelete(id);
};

// update user
const updateUser = async (id, user) => {
  return await Users.findByIdAndUpdate(id, user);
};

//read all user from the database
const getAllUsers = async () => {
  return await Users.find({});
};

module.exports = {
  createUser,
  deleteUser,
  updateUser,
  getAllUsers,
  signInUser,
};
