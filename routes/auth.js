const Debug = require("debug");
const express = require("express");
const passport = require("passport");
const boom = require("boom");
const jwt = require("jsonwebtoken");
const api = express.Router();

const { config } = require("../config/index");

const debug = new Debug("jlc-prime-numbers:route-auth*");

require("../utils/auth/strategies/basic");

api.post("/token", async function (req, res, next) {
  passport.authenticate("basic", function (error, user) {
    try {
      if (error || !user || user === undefined) {
        debug("[token] Authentication rejected!");
        res
          .status(boom.unauthorized().output.statusCode)
          .json({ message: boom.unauthorized().message });
      } else {
        req.login(user, { session: false }, async function (err) {
          if (err) {
            next(err);
          }

          const payload = { email: user.email, password: user.password };
          const token = jwt.sign(payload, config.secret, {
            expiresIn: "30m",
          });

          debug("[basic] Authenticate success!");
          return res.status(200).json({ access_token: token });
        });
      }
    } catch (err) {
      next(err);
    }
  })(req, res, next);
});

module.exports = api;
