const {
  createUser,
  deleteUser,
  updateUser,
  getAllUsers,
  signInUser,
} = require('../../models/users/users.model');

const httpCreateUser = async (req, res) => {
  const fullName = req.body.fullName;
  const username = req.body.username;
  const email = req.body.email;
  const role = req.body.role;
  const password = req.body.password;

  return res.json(await createUser(fullName, username, email, role, password));
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
