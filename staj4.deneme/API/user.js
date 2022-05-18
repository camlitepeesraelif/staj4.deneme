const express = require('express');
const mongoose = require('mongoose');
const User = require('../DB/User');
const route = express.Router();

route.post('/', async (req, res) => {
  const { ıd,Name, SurName } = req.body;
  let user = {};
  user.ıd = ıd;
  user.Name = Name;
  user.SurName = SurName;
  let userModel = new User(user);
  await userModel.save();
  res.json(userModel);
});

module.exports = route;