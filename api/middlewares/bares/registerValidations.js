const { body } = require("express-validator");

module.exports = [
    body("name")
        .notEmpty()
        .withMessage("Debes escribir tu nombre")
        .isLength({ min: 2 })
        .withMessage("Debe contener más de 2 caracteres"),
    body("location")
        .notEmpty()
        .withMessage("Debes escribir tu ubicación")
        .isLength({ min: 2 })
        .withMessage("Debe contener más de 2 caracteres"),
    body("description")
        .notEmpty()
        .withMessage("la descripción es obligatorio")
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
    // body("photos").notEmpty().withMessage("Los formatos aceptados son jpg, jpeg y png. "),
        // .custom((value, { req }) => {
        //     let files = req.files;
        //     files.forEach((file) => {
        //         if (
        //             file.mimetype == "image/jpg" ||
        //             file.mimetype == "image/jpeg" ||
        //             file.mimetype == "image/png" ||
        //             file.mimetype == "image/gif"
        //         ) {
        //             return true; // return "non-falsy" value to indicate valid data"
        //         } else {
        //             return false; // return "falsy" value to indicate invalid data
        //         }
        //     });
        // })
     
];
