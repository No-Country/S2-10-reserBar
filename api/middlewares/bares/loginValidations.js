const { body } = require("express-validator");

module.exports = [
    body("email")
        .notEmpty()
        .withMessage("El mail es obligatorio")
        .bail()
        .isEmail()
        .withMessage("Debe ser un formato de correo válido"),
    body("password")
        .notEmpty()
        .withMessage("Es necesario una contraseña")
        .isLength({ min: 4 })
        .withMessage("Debe contener al menos 4 caracteres"),
];