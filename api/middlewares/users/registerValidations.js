const { body } = require("express-validator");

module.exports = [
    body("name")
        .notEmpty()
        .withMessage("Debes escribir tu nombre")
        .isLength({ min: 2 })
        .withMessage("Debe contener más de 2 caracteres"),
    body("last_name")
        .notEmpty()
        .withMessage("Debes escribir tu apellido")
        .isLength({ min: 2 })
        .withMessage("Debe contener más de 2 caracteres"),
    body("email")
        .notEmpty()
        .withMessage("El e-mail es obligatorio")
        .bail()
        .isEmail()
        .withMessage("Debe ser un formato de correo válido"),
    body("password")
        .notEmpty()
        .withMessage("Es necesario un mensaje")
        .isLength({ min: 4 })
        .withMessage("Debe contener al menos 4 caracteres"),
];