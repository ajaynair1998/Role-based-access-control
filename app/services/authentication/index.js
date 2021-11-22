const JWTstrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;
const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");

passport.use(
  new JWTstrategy(
    {
      secretOrKey: "SOME_SECRET_KEY",
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    },
    async (token, done) => {
      try {
        return done(null, token.user);
      } catch (error) {
        done(error);
      }
    }
  )
);

async function respondWithTokenOnlogin(req, res, next) {}
