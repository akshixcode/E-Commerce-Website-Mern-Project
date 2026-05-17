const jwt = require("jsonwebtoken");
const User = require("../models/User");

const authMiddleware = async (req, res, next) => {
  try {


    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    console.log(token, "TOKEN");

    if (!token) {
      return res.status(401).json({
        message: "No token",
      });
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    console.log(decoded, "DECODED");

    req.user = await User.findById(decoded.id).select("-password");

    console.log(req.user, "USER");

    next();

  } catch (error) {
    console.log(error);

    return res.status(401).json({
      message: "Token failed",
    });
  }
};

module.exports = authMiddleware;