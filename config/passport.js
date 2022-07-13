const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('../models/user');

passport.use(
	new GoogleStrategy(
		// Configuration object
		{
			clientID: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_SECRET,
			callbackURL: process.env.GOOGLE_CALLBACK
		},
		// The verify callback function
		function (accessToken, refreshToken, profile, cb) {
			// a user has logged in with OAuth...
			User.findOne({ googleId: profile.id }).then(async function (user) {
				if (user) return cb(null, user);
				// We have a new user via OAuth!
				try {
					user = await User.create({
						name: profile.displayName,
						googleId: profile.id,
						email: profile.emails[0].value,
						avatar: profile.photos[0].value
					});
					return cb(null, user);
				} catch (err) {
					return cb(err);
				}
			});
		}
	)
);

// attaches information on the user to the session
passport.serializeUser((user, cb) => {
	cb(null, user._id);
});

// attaches the user document to the request object aka req.user
passport.deserializeUser( (userId, cb) => {
	User.findById(userId).then((user) => {
		cb(null, user);
	});
});