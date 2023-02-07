const mongoose = require("mongoose");

module.exports = function () {
  const db =
    "mongodb+srv://haris_iqbal:clustor@cluster0.7awl2ek.mongodb.net/store";
  mongoose.set("strictQuery", false);
  mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  // const db ="mongodb+srv://haris_iqbal:clustor@cluster0.7awl2ek.mongodb.net/users";
  // // mongoose.set("strictQuery", false);
  // mongoose.connect(
  //   "mongodb+srv://haris_iqbal:clustor@cluster0.7awl2ek.mongodb.net/users",
  //   {
  //     useNewUrlParser: true,
  //     useUnifiedTopology: true,
  //   }
  // );

  mongoose.connection.on("connected", function () {
    console.log("mongo connected to " + db);
  });

  mongoose.connection.on("error", function (err) {
    console.log("mongo connected error " + err);
  });

  mongoose.disconnect("disconnected", function () {
    console.log("mongo disconnected " + err);
  });
};
