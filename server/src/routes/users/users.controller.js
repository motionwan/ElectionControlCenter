const {
  createUser,
  deleteUser,
  updateUser,
  getAllUsers,
  signInUser,
} = require("../../models/users/users.model");

const httpCreateUser = async (req, res) => {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    if (password.length < 6) {
      return res.json({ message: "Password should be at least 6 characters" });
    }
    return res.json(await createUser(name, email, password));
  } catch (err) {
    if (err.code === 11000) {
      console.log({ message: "email already exists" });
      return res.json({ message: "email already registered" });
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
