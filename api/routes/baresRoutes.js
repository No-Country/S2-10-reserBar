const express = require("express");
const routes = express.Router();
const baresControllers = require("../controllers/baresControllers");
const registerValidations = require("../middlewares/bares/registerValidations");

const upload = require("../middlewares/bares/barMulter")


routes.post("/register", upload.array("photos", 3), baresControllers.register );




module.exports = routes;