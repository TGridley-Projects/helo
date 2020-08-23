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
      const newUser = await db.create_user([username, hash, profile_pic]);
      delete newUser[0].password;
      req.session.user = {
        user_id: newUser.user_id,
        username: newUser.username,
        profile_pic: newUser.profile_pic
      };
      res.status(200).send(req.session.user);
    }
  },
  login: async (req, res) => {
    const db = req.app.get('db');
    const { username, password } = req.body;
    let foundUser = await db.check_user(username);
    foundUser = foundUser[0]
    console.log(foundUser)
    if (foundUser) {
      const compareHash = foundUser.password;
      const authenticated = bcrypt.compareSync(password, compareHash);
      if (authenticated) {
        delete foundUser.password;
        console.log(foundUser)
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
