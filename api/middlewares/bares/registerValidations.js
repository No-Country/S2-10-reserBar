const { body } = require("express-validator");

module.exports = [
    body("name")
        .notEmpty()
        .withMessage("Debes escribir tu nombre")
        .isLength({ min: 2 })
        .withMessage("Debe contener más de 2 caracteres"),
    body("location")
        .notEmpty()
        .withMessage("Debes escribir tu apellido")
        .isLength({ min: 2 })
        .withMessage("Debe contener más de 2 caracteres"),
    body("description")
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
    body("photos").custom((value, { req }) => {
        let file = req.files;
        if (!file) {
            throw new Error("Tienes que subir una imagen");
        } else {
            let acceptedExtension = [".jpg", ".jpeg", ".png", ".gif"];
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtension.includes(fileExtension)) {
                throw new Error(
                    `Los formatos permitidos son ${acceptedExtension.join(
                        ", "
                    )}`
                );
            }
        }
        return true;
    }),
];
