const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const cookieSession = require("cookie-session");
const passport = require("passport");
require("./models/User");
require("./services/passport");

const app = express();

// Enable cookies
app.use(
  cookieSession({
    // providing configuration object
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    keys: [keys.cookieKey], // it will randomly pick one if many
  })
);
// tell passport that it should make use of cookies to handle authentication.
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const authRoutes = require("./routes/authRoutes");
authRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`connected to port ${PORT}.`);
});
