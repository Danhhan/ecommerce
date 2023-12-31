"use strict";

const express = require("express");
const authController = require("../../controllers/auth.controller");
const router = express.Router();

router.post("/auth/sign-up", authController.signUp);
module.exports = router;
