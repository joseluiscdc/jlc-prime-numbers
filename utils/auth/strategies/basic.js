const Debug = require('debug')
const passport = require("passport");
const { BasicStrategy } = require("passport-http");
const boom = require("boom");
const bcrypt = require("bcrypt");
const { getUser } = require("../../../service/userService");
const debug = new Debug('jlc-prime-numbers:strategies-basic*')

passport.use(
  new BasicStrategy(async function(email, password, done) {
    try {
      const user = await getUser(email);

      if (!user || user === null) 
        return done(boom.unauthorized(), false);

      if (!(await bcrypt.compare(password, user.password))) 
        return done(boom.unauthorized(), false)

      return done(null, user);
      
    } catch (error) {
      return done(error);
    }
  })
);