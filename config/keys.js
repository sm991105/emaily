// keys.js - figure out what set of credentials to return

if (process.env.NODE_ENV === "production") {
  // prod mode
  module.exports = require("./prod");
} else {
  // dev mode, fetch keys from keys.js
  module.exports = require("./dev");
}
