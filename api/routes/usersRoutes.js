const express = require("express");
const routes = express.Router();
const usersControllers = require("../controllers/usersControllers");
const registerMiddleware = require("../middlewares/users/registerMiddleware");
const loginMiddleware = require("../middlewares/users/loginMiddleware");
const verifyToken = require("../middlewares/verifyToken");

routes.put("/:id", verifyToken, usersControllers.editOneUser);

routes.get("/", usersControllers.getUsers);

routes.get("/:id", verifyToken, usersControllers.perfil);

routes.post("/register", registerMiddleware, usersControllers.register);

routes.post("/login", loginMiddleware, usersControllers.login);

routes.delete("/:id", verifyToken, usersControllers.deleteOneUser);

module.exports = routes;
