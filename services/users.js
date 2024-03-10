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

router.patch('edit/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  try {
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    if (name) {
      user.name = name;
    }

    if (email) {
      user.email = email;
    }

    await user.save();

    res.status(200).json(user);
  } catch (error) {
    console.log('Error updating user: ', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
