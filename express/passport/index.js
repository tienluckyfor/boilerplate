require('rootpath')();
const passport = require('passport');
const local = require('./local');
const User = require('models/user');

module.exports = () => {
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser(async (id, done) => {
        try {
            const user = await User.findOne({ where: { id }});
            done(null, user); // req.user
        } catch (error) {
            console.error(error);
            done(error);
        }
    });

    local();
};