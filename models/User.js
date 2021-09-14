const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/UserAuth", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var userSchema = mongoose.Schema({
    uid: String,
    token: String,
    email: String,
    name: String,
    gender: String,
    pic: String
});

module.exports = mongoose.model('User', userSchema);
