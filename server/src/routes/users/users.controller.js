const {
  createUser,
  deleteUser,
  updateUser,
  getAllUsers,
  signInUser,
} = require('../../models/users/users.model');

const httpCreateUser = async (req, res) => {
  try {
    const fullName = req.body.fullName;
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    return res.json(await createUser(fullName, username, email, password));
  } catch (err) {
    if (err.code === 11000) {
      console.log({ message: 'email already exists' });
      return res.json({ message: 'Email already registered' });
    } else {
      throw err;
    }
  }
};

const httpDeleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    return res.json(await deleteUser(id));
  } catch (err) {
    console.log(err);
  }
};

const httpUpdateUser = async (req, res) => {
  try {
    const user = req.body;
    const id = req.params.id;
    return res.json(await updateUser(id, user));
  } catch (err) {
    console.log(err);
  }
};

const httpGetAllUsers = async (req, res) => {
  try {
    return res.json(await getAllUsers());
  } catch (err) {
    console.log(err);
  }
};
const httpSignInUser = async (req, res) => {
  const { email, password } = req.body;
  return res.json(await signInUser(email, password));
};

module.exports = {
  httpCreateUser,
  httpDeleteUser,
  httpUpdateUser,
  httpGetAllUsers,
  httpSignInUser,
};
