const express = require("express");
const routes = express.Router();
const baresControllers = require("../controllers/baresControllers");
const registerValidations = require("../middlewares/bares/registerValidations");
const loginValidations = require("../middlewares/bares/loginValidations")
const verifyToken = require("../middlewares/verifyToken");

const upload = require("../middlewares/bares/barMulter")


routes.post("/register", upload.array("photos", 3), registerValidations, baresControllers.register );

routes.post("/:id", loginValidations, baresControllers.login);

routes.put("/:id", verifyToken, baresControllers.editBar);

routes.get("/", baresControllers.getBares);

routes.get("/:id", baresControllers.getBar);

routes.put("/:id/reserve", verifyToken, baresControllers.reservar);

routes.put("/:id/unreserve", verifyToken, baresControllers.reservarDelete)

routes.get("/:id/reserve", baresControllers.getReservas);





module.exports = routes;