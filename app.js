const express = require("express");
const app = express();
const path = require("path");

const authApiRouter = require("./routes/auth");
const primeNumbersApiRouter = require("./routes/primeNumbers");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

if (process.env.NODE_ENV === "development") {
  app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Request-With, Content-Type, Accept"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "POST, GET, PATCH, DELETE, OPTIONS"
    );
    next();
  });
}

if (process.env.NODE_ENV === "production") {
  app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Request-With, Content-Type, Accept"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "POST, GET, PATCH, DELETE, OPTIONS"
    );
    next();
  });
  app.use(express.static(path.join(process.cwd(), "dist/jlc-prime-numbers")));
}

app.use("/api/primenumbers", primeNumbersApiRouter);
app.use("/api/auth", authApiRouter);

module.exports = app;
