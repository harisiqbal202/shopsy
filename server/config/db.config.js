const mongose = require("mongoose");

module.exports = function () {
  mongose.connect(
    "mongodb+srv://haris_iqbal:clustor@cluster0.7awl2ek.mongodb.net/store",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) {
        console.log("dbErr:", err.message);
      }
    }
  );

  const connect = mongose.connection;

  connect.once("open", () => {
    console.log("mogoDb connected!");
  });
};
