const Debug = require("debug");
const passport = require("passport");
const { BasicStrategy } = require("passport-http");
const boom = require("boom");
const bcrypt = require("bcrypt");
const debug = new Debug("jlc-prime-numbers:strategies-basic*");

const { getUser } = require("../../../services/userService");

passport.use(
  new BasicStrategy(async function (email, password, done) {
    try {
      const user = await getUser(email);

      if (!user || user === null) return done(boom.unauthorized(), false);

      if (!(await bcrypt.compare(password, user.password)))
        return done(boom.unauthorized(), false);

      debug("BasicStrategy done...");
      return done(null, user);
    } catch (error) {
      debug(`BasicStrategy error : ${error.message} `);
      return done(error);
    }
  })
);
