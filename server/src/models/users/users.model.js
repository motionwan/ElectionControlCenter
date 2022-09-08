require("dotenv").config();
const Users = require("./users.mongo");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET_KEY;

//create user
const createUser = async (name, email, password) => {
  password = await bcrypt.hash(password, 10);
  return await Users.create({ name, email, password });
};

// sign in user

const signInUser = async (email, password) => {
  const user = await Users.findOne({ email }).lean();
  if (!user) {
    return { message: "invalid email or password" };
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
    return { token: token, user: user.email, id: user._id };
  } else {
    return { message: "invalid email or password" };
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
