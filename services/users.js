const express = require('express');
const router = express.Router();

const User = require('../models/User.model');

const userJson = require('../user.json');
const { moduleExpression } = require('@babel/types');

router.get('/all', async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/username', async (req, res) => {
  try {
    const users = await User.find({}).select('username');

    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/email', async (req, res) => {
  try {
    const users = await User.find({}).select('email');

    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users email:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/bio', async (req, res) => {
  try {
    const users = await User.find({}).select('bio');

    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users biography:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
router.get('/image', async (req, res) => {
  try {
    const users = await User.find({}).select('image');

    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users image:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// we need the Router() method of the express module
// to create new route handlers
const express = require('express');

const router = express.Router();

// the model does not exist yet, please create the model
// const User = require('../models/User.model');

// user endpoints


module.exports = router;
