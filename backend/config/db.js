const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGO_URI, {});
    console.log(db.connection.host);
  } catch (error) {
    console.log("Error:" + error.message);
  }
};

module.exports = dbConnect;
