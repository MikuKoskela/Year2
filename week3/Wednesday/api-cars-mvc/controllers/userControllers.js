const User = require("../models/userModel");

// GET /users
const getAllUsers = (req, res) => {
  const users = User.getAll()
  res.json({ message: users });
};

// POST /users
const createUser = (req, res) => {
  const { name, password, username, address, age } = req.body
  const user = User.addOne({ name, password, username, address, age })
  res.json({ message: user });
};

// GET /users/:userId
const getUserById = (req, res) => {
  const { userId } = req.params;
  const user = User.findById(userId)
  res.json({ message: user });
};

// PUT /users/:userId
const updateUser = (req, res) => {
  const { userId } = req.params;
  const { name, password, username, address, age } = req.body
  const user = User.updateOneById(userId,{ name, password, username, address, age })
  res.json({ message: user });
};

// DELETE /users/:userId
const deleteUser = (req, res) => {
  const { userId } = req.params;
  const deletedUser = User.deleteOneById(userId)
  res.json({ message: deletedUser });
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
