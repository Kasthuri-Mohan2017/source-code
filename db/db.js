const mongoose = require("mongoose");
require("dotenv").config();
const connect = () => {
    return mongoose.connect(`mongodb+srv://Kasthuri-mohan2017:Mohan1991@cluster0.0fh880b.mongodb.net/?retryWrites=true&w=majority`)

}
module.exports = connect;
