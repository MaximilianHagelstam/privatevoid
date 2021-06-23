const GitHubStrategy = require('passport-github2').Strategy;
const User = require('../models/User');
const logger = require('./logger');

module.exports = (passport) => {
  passport.use(
    new GitHubStrategy(
      {
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: process.env.CALLBACK_URL,
      },
      async (accessToken, refreshToken, profile, done) => {
        const newUser = {
          id: profile.id,
          username: profile.username,
          display_name: profile.displayName,
          image_url: profile.photos[0].value,
          // eslint-disable-next-line no-underscore-dangle
          bio: profile._json.bio,
        };

        try {
          let user = await User.findOne({ where: { id: profile.id } });
          logger.debug(JSON.stringify(user));

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
