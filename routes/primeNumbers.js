const Debug = require("debug");
const express = require("express");
const passport = require("passport");
const app = express.Router();
const PrimesService = require("../services/primesService");
const debug = new Debug("jlc-prime-numbers:route-primesnumbers*");

const { handleError } = require("../middleware/errosHandlers");
const cacheResponse = require("../utils/cacheResponse");
const { SIXTY_MINUTES_IN_SECONDS } = require("../utils/time");

require("../utils/auth/strategies/jwt");

const primesService = new PrimesService();

app.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  async function (req, res, next) {
    cacheResponse(res, SIXTY_MINUTES_IN_SECONDS);
    try {
      debug(`Get prime numbers for ${req.query.limit_number}`);
      res.status(200).json({
        message: `The prime numbers for ${req.query.limit_number}`,
        data: primesService.getPrimes(req.query),
      });
    } catch (error) {
      handleError(error, res);
    }
  }
);

module.exports = app;
