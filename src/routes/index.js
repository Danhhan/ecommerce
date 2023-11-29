const express = require("express");

const apiRoute = express();
apiRoute.use('/v1/api/', require('./auth'))
module.exports = apiRoute
