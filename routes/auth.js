const Debug = require('debug')
const express = require('express')
const passport = require("passport");
const boom = require("boom");
const jwt = require("jsonwebtoken");
const api = express.Router();

const { config } = require("../config/index");

const debug = new Debug('jlc-prime-numbers:route-auth*')

require("../utils/auth/strategies/basic");

api.post("/token", async function(req, res, next) {

  passport.authenticate("basic", function(error, user) {
    try {
      if (error || !user || user === undefined){
        debug('[token] Authentication rejected!')
        res.status(boom.unauthorized().output.statusCode).json({ error: boom.unauthorized().message});
      } else {
        req.login(user, { session: false }, async function(error) {
          if (error) {
            next(error);
          }
  
          const payload = { email: user.email, password: user.password };
          const token = jwt.sign(payload, config.secret, {
            expiresIn: "15m"
          });
  
          debug('[token] Authenticate success!')
          return res.status(200).json({ access_token: token });
        });
      }
    } catch (error) {
      next(error);
    }
  })(req, res, next);

});

module.exports = api