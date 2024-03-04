const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    password: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    bio: String,
    image: String,
  },
  { timestamps: true }
);

const nameOfCollection = 'users';
const Users = mongoose.model('users', userSchema, nameOfCollection);

module.exports = Users;
