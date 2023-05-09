var express = require("express");
const {login} = require("./auth.controllers");
var router = express.Router();

router.post("/login", login);

module.exports = router;
