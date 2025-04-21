// const express = require("express");
// const cors = require("cors");
// require("dotenv").config();
// const connectDB = require("./config/db");
// const userRoutes = require("./routes/userRoutes");
// const cookieParser = require("cookie-parser");
// const { notFound, errorHandler } = require("./middleware/errorHandler");
// connectDB();

// const app = express();

// app.use(
//   cors({
//     origin: process.env.BASE_URL,
//     credentials: true,
//     methods: "PUT,POST,GET,DELETE,PATCH,HEAD",
//   })
// );

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());
// app.use("/api/user/", userRoutes);

// app.use(notFound);
// app.use(errorHandler);

// app.listen(process.env.PORT, () => {
//   console.log(`Server running on port ${process.env.PORT}`);
// });

// import express from "express";
// import cors from "cors";
// import path from "path";
// import dotenv from "dotenv";
// import connectDB from "./config/db.js";
// import userRoutes from "./routes/userRoutes.js";
// import cookieParser from "cookie-parser";
// import { notFound, errorHandler } from "./middleware/errorHandler.js";

// dotenv.config();

// // Connect to MongoDB
// connectDB();

// const app = express();

// // CORS configuration
// app.use(
//   cors({
//     origin: process.env.BASE_URL,
//     credentials: true,
//     methods: ["PUT", "POST", "GET", "DELETE", "PATCH", "HEAD"],
//   })
// );

// // Body parsing middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());

// // API routes
// app.use("/api/user", userRoutes);

// // Serve static files from the React build
// const __dirnamePath = path.resolve();
// app.use(express.static(path.join(__dirnamePath, "../frontend/dist")));

// // Catch-all handler to serve React's index.html for any unknown routes
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirnamePath, "../frontend/dist/index.html"));
// });

// // Error handling middleware
// app.use(notFound);
// app.use(errorHandler);

// // Start the server
// const PORT = process.env.PORT || 2060;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

const productRoutes = require("./routes/productRoutes");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const path = require("path");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const cookieParser = require("cookie-parser");
const { notFound, errorHandler } = require("./middleware/errorHandler");

// Connect to MongoDB
connectDB();

const app = express();

// CORS config
app.use(
  cors({
    origin: process.env.BASE_URL,
    credentials: true,
    methods: ["PUT", "POST", "GET", "DELETE", "PATCH", "HEAD"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// API route
app.use("/api/user", userRoutes);
app.use("/api/products", productRoutes);


// Serve frontend build
app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

// Error middlewares
app.use(notFound);
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 2060;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
