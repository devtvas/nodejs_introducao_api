const mongoose = require("mongoose");
const uri = process.env.MONGODB_URL
mongoose.Promise = global.Promise;

mongoose
  .connect(`${uri}`, {
    // useMongoClient: true
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
