const bcrypt = require('bcrypt')

module.exports = {
    register: async (req, res) => {
        const db = req.app.get('db');
        const {username, password} = req.body;
        const existingUser = await db.check_user(username);
        if(existingUser[0]){
            return res.status(409).send('User name already in use')
        }
        const salt = bcrypt.genSaltSync(15);
        const hash = bcrypt.hashSync(password, salt)
        const newUser = await db.create_user([username, hash])
        req.session.user = {
            username: newUser.username
        }
        res.status(200).send(req.session.user)
    },
}