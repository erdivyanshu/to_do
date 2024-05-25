import express from "express";
import apiRoute from "./routes/api.js";
import mongoose from "mongoose";
import { DB_CONNECT } from "./utils/constants.js";

const app = express();

const connectDB = async () => {
  try {
    await mongoose.connect(DB_CONNECT, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
  }
};

connectDB();

const PORT = 5000;

// Middleware
app.use(express.json());

app.use('/api', apiRoute);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
