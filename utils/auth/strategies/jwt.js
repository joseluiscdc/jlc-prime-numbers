const Debug = require("debug");
const passport = require("passport");
const { Strategy, ExtractJwt } = require("passport-jwt");
const boom = require("boom");

const { getUser } = require("../../../services/userService");
const { config } = require("../../../config/index");

const debug = new Debug("jlc-prime-numbers:route-jwt*");

passport.use(
  new Strategy(
    {
      secretOrKey: config.secret,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    },
    async function (tokenPayload, cb) {
      try {
        const user = await getUser(tokenPayload.email);

        if (!user) return cb(boom.unauthorized(), false);

        debug("[token] Authenticate success!");
        return cb(null, user);
      } catch (error) {
        return cb(error);
      }
    }
  )
);
