'use strict'

const AuthService = require("../services/auth.service");

class AuthController {
  signUp = async (req, res, next) => {
    try {
      console.log(`[P]::signUp::`, req.body);
      const signUp = await AuthService.signUp(req.body);
      console.log('signUp: ', signUp);
      return res.status(201).json(signUp)
    } catch(err) {
      next(err)
    }
  }
}

module.exports = new AuthController