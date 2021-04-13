const mongoose = require("mongoose");
require("dotenv").config();
const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
  console.log(`mongodb connected Gunratna `);
};
module.exports = connectDB;
