dotenv.config();
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
  })
);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
