const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/User');
const logger = require('./logger');

module.exports = (passport) => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: '/auth/google/callback',
      },
      async (accessToken, refreshToken, profile, done) => {
        const newUser = {
          googleId: profile.id,
          displayName: profile.displayName,
        };

        try {
          let user = await User.findOne({ where: { googleId: profile.id } });

          if (user) {
            done(null, user);
            logger.info('User signed in');
          } else {
            user = await User.create(newUser);
            done(null, user);
            logger.debug('New user signed up');
          }
          logger.debug(user);
        } catch (err) {
          logger.error(`Error authenticating user: ${err}`);
        }
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findByPk(id, (err, user) => done(err, user));
  });
};
