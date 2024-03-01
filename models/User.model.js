const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
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
