const AppError = require("../utils/AppError");

const getCartByUserId = (req, res, next) => {
  const userId = req.params.userId;

  if (!userId) {
    return next(new AppError("User ID is required for cart", 400));
  }

  res.json({
    success: true,
    data: `Fetching cart for user with Id: ${userId}`
  });
};

const postCartByUserId = (req, res, next) => {
  const userId = req.params.userId;

  if (!userId) {
    return next(new AppError("User ID is required to add to cart", 400));
  }

  res.json({
    success: true,
    data: `Adding product to cart for user with Id: ${userId}`
  });
};

module.exports = {
  getCartByUserId,
  postCartByUserId
};
