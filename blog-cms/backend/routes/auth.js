const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const router = express.Router();

router.post('/signup', async (req, res) => {
const { username, password } = req.body;

  // Checks if user already exists and handle password encryption etc...
});

router.post('/login', async (req, res) => {
const { username, password } = req.body;

  // Handles user authentication...
});

router.get('/logout', (req, res) => {
  // Handles user logout...
});

module.exports = router;
