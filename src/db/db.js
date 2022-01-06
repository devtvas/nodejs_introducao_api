const mongoose = require("mongoose");
const uri = "mongodb://localhost/devtvas-api"
mongoose.Promise = global.Promise;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Mongo con");
  })
  .catch((error) => {
    console.log(error.message);
    // process.exit(1);
  });
module.exports = mongoose;
