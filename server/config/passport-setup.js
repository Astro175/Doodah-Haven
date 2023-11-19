const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
require('dotenv').config('../.env');
const { OAuthUser } = require('../models/userModel')

passport.use(
  new GoogleStrategy({
    // Options object
    callbackURL: 'http://localhost:4000/api/users/google/redirect',
    clientSecret: process.env.GOOGLE_SECRET,
    clientID: process.env.GOOGLE_CLIENT,
  }, async (accessToken, refreshToken, profile, done) => {
    try {
      let user = await OAuthUser.findOne({ oauthId: profile.id });

      if (!user) {
        user = await new OAuthUser({
          firstname: profile.name.givenName,
          lastname: profile.name.familyName,
          email: profile._json.email,
          oauthId: profile.id,
        }).save();
      }

      return done(null, user);
    } catch (err) {
      return done(err, null);
    }
  })
);
