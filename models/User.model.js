const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: String,
    email: String,
    bio: String,
    image: String,
    hash: String,
    salt: String,
  },
  { timestamps: true }
);

const nameOfCollection = 'users';
const user = mongoose.model('users', userSchema, nameOfCollection);

module.exports = user;
