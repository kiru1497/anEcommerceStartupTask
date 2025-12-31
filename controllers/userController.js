const AppError = require("../utils/AppError");

const getUsers = (req, res) => {
  res.json({
    success: true,
    data: "Fetching all users"
  });
};

const postUser = (req, res) => {
  res.json({
    success: true,
    data: "Adding a new user"
  });
};

const getUserById = (req, res, next) => {
  const id = req.params.id;

  if (!id) {
    return next(new AppError("User ID is required", 400));
  }

  res.json({
    success: true,
    data: `Fetching user with id: ${id}`
  });
};

module.exports = {
  getUsers,
  postUser,
  getUserById
};
