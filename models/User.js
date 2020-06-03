const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const {Schema} = mongoose

const userSchema = new Schema({
  googleId: {
    type: String,
  },
  credits: {
    default: 0,
    type: Number,
  },
});

mongoose.model("users", userSchema);
