const GitHubStrategy = require('passport-github2').Strategy;
const User = require('../models/User');
const logger = require('./logger');

module.exports = (passport) => {
  passport.use(
    new GitHubStrategy(
      {
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: 'http://localhost:8080/auth/github/callback',
      },
      async (accessToken, refreshToken, profile, done) => {
        const newUser = {
          githubId: profile.id,
          displayName: profile.displayName,
        };

        try {
          let user = await User.findOne({ where: { githubId: profile.id } });

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
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    done(null, user);
  });
};
