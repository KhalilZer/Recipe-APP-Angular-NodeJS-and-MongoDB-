const mongoose = require("mongoose");

const connectDB = async () => {
  const uri = "mongodb://localhost:27017/";
  mongoose.connect(uri, { dbName: "ReceipeDB" }).then(() => {
    console.log("connection success");
  });
};

module.exports = connectDB;
