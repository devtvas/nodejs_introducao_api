const mongoose = require("mongoose");
<<<<<<< HEAD

require('dotenv').config()

const uri = process.env.MONGODB_URL

=======
const uri = "mongodb://localhost/devtvas-api"
>>>>>>> 9685e7ce91f055af9e156473ca61a364d2ae5361
mongoose.Promise = global.Promise;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
  })
  .then(() => {
<<<<<<< HEAD
    console.log("Local_Mongo conected");
=======
    console.log("Mongo con");
>>>>>>> 9685e7ce91f055af9e156473ca61a364d2ae5361
  })
  .catch((error) => {
    console.log(error.message);
    // process.exit(1);
  });
module.exports = mongoose;
