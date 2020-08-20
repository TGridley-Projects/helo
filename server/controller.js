const bcrypt = require('bcrypt');
// const express = require('express')
// const session = require('express-session');

module.exports = {
  register: async (req, res) => {
    const db = req.app.get('db');
    const { username, password, profile_pic } = req.body;
    const existingUser = await db.check_user(username);
    if (existingUser[0]) {
      return res.sendStatus(409);
    } else {
      const salt = bcrypt.genSaltSync(15);
      const hash = bcrypt.hashSync(password, salt);
      const newUser = await db.create_user([username, hash, profile_pic]);
      req.session.user = {
        username: newUser.username,
      };
      res.status(200).send(req.session.user);
    }
  },
};
