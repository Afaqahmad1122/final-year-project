import mongoose from "mongoose";

const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "FYP",
    })
    .then(() => {
      console.log("Database Connected Successfullty");
    })
    .catch(() => {
      console.log("Connection Failed");
    });
};

export default dbConnection;
