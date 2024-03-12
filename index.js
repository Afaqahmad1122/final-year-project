dotenv.config();
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRouter from "./routes/user.router.js";
import dbConnection from "./database/dbConnection.js";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
  })
);

// * routes
app.use("/api/v1/user", userRouter);

// database connection

dbConnection();

// app listening
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
