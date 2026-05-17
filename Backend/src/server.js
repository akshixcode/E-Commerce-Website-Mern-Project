require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const path = require("path");
const connectDB = require("./config/db");
const { registerUser, loginUser } = require("./controllers/authController");
const {
  createProduct,
  getProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} = require("./controllers/productController");
const upload = require("./middlewares/multer");
const authMiddleware = require("./middlewares/authMiddleware");
const adminMiddleware = require("./middlewares/roleMiddleware");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(cookieParser());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.post("/api/auth/register", registerUser);
app.post("/api/auth/login", loginUser);
app.post("/api/createProducts", authMiddleware, adminMiddleware, upload.single("image"), createProduct);
app.get("/api/getProducts", getProducts);
app.get("/api/getSingleProducts/:id", getSingleProduct);
app.put("/api/updateProducts/:id", authMiddleware, adminMiddleware, upload.single("image"), updateProduct);
app.delete("/api/deleteProducts/:id", authMiddleware, adminMiddleware, deleteProduct);
app.post("/api/auth/logout", (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out successfully" });
});

// test route
app.get("/", (req, res) => {
  res.send("API running");
});

app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server running at http://localhost:${PORT}`);
});
