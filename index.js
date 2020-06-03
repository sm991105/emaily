const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const cookieSession = require("cookie-session");
const passport = require("passport");
require("./models/User");
require("./services/passport");

const app = express();
app.use(express.json());

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
const billingRoutes = require("./routes/billingRoutes");
authRoutes(app);
billingRoutes(app);

if (process.env.NODE_ENV === "production") {
  // Express will serve up production assets
  // like main.js, main.css file
  app.use(express.static("client/static/build"));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`connected to port ${PORT}.`);
});
