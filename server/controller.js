const bcrypt = require('bcrypt');

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
      let newUser = await db.create_user([username, hash, profile_pic]);
      newUser = newUser[0]
      delete newUser.password;
      req.session.user = newUser
      res.status(200).send(req.session.user);
    }
  },
  login: async (req, res) => {
    const db = req.app.get('db');
    const { username, password } = req.body;
    let foundUser = await db.check_user(username);
    foundUser = foundUser[0];
    if (foundUser) {
      const compareHash = foundUser.password;
      const authenticated = bcrypt.compareSync(password, compareHash);
      if (authenticated) {
        delete foundUser.password;
        req.session.user = foundUser;
        res.status(202).send(req.session.user);
      } else {
        res.status(401).send("Email or password incorrect");
      }
    } else {
      res.status(401).send("Email or password incorrect");
    }
  },
};
