const Users = require("../models/Users");
const Bares = require("../models/Bares");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const { findOne } = require("../models/Bares");

const usersControllers = {
    register: async (req, res) => {
        try {
            // revisamos si hay errores
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.mapped() });
            }
            //extrae el mail y el password
            const { email, password } = req.body;

            //revisa que el usuario sea único
            let user = await Users.findOne({ email });
            if (user) {
                return res.status(400).json({ msg: "El usuario ya existe" });
            }

            //crea el usuario
            user = new Users(req.body);

            //hashear el password
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);

            //guarda el usuario
            await user.save();

            res.status(200).json({
                msg: "Usuario creado exitosamente",
            });
        } catch (error) {
            console.log(error);
            res.status(400).send("No se pudo crear el usuario");
        }
    },
    login: async (req, res) => {
        // revisamos si hay errores
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        //extrae el mail y el password
        const { email, password } = req.body;

        try {
            const user = await Users.findOne({ email });
            if (!user)
                return res.status(400).json({ error: "Usuario no encontrado" });

            const validPassword = await bcrypt.compare(password, user.password);
            if (!validPassword)
                return res.status(400).json({ error: "contraseña no válida" });

            //Si pasa las validaciones crear y firmar el jwt

            const payload = {
                user: {
                    username: user.name,
                    id: user._id,
                },
            };

            //firmar el token
            const token = jwt.sign(
                payload,
                process.env.SECRET,
                {
                    expiresIn: "3h",
                },
                (error, token) => {
                    if (error) throw error;

                    //mensaje de confirmación
                    res.json({ token , user});

                }
            );
        } catch (error) {
            console.log(error);
            res.status(404).send("Credenciales inválidas");
        }
    },
    perfil: async (req, res) => {
        try {
            const user = await Users.findById(req.params.id);

            return res.status(200).json({
                user,
            });
        } catch (error) {
            console.log(error);
            res.status(404).send("Usuario no encontrado");
        }
    },
    getUsers: async (req, res) => {
        try {
            let users = await Users.find();
            return res.status(200).json({
                total: users.length,
                users,
            });
        } catch (error) {
            console.log(error);
            res.status(404).send("No se puede acceder a usuarios");
        }
    },
    deleteOneUser: async (req, res) => {
        try {
            const id = { _id: req.params.id };
            jwt.verify(req.token, process.env.SECRET, async (error, data) => {
                if (!error) {
                    await Users.findByIdAndDelete(id);
                    return res
                        .status(200)
                        .json("Usuario eliminado con un exito.");
                } else {
                    res.status(401).json("Token no válido");
                }
            });
        } catch (error) {
            console.log(error);
            res.status(404).send("No se puede eliminar el usuario");
        }
    },
    editOneUser: async (req, res) => {
        try {
            const id = { _id: req.params.id };
            const body = req.body;

            jwt.verify(req.token, process.env.SECRET, async (error, data) => {
                if (!error) {
                    const user = await Users.findByIdAndUpdate(id, {
                        name: body.name,
                        last_name: body.last_name,
                        email: body.email,
                    });
                    res.status(200).json({
                        msg: "Usuario actualizado con exito.",
                    });
                } else {
                    res.status(401).json("Token no válido");
                }
            });
        } catch (error) {
            console.log(error);
            res.status(404).send("Error consulta db home");
        }
    },
    reservas: async (req, res) => {
        try {
            const id = { _id: req.params.id };

            const user = await Users.findById(id);
            const reservas = user.my_reserve;
            const bar = await Bares.findById(reservas);
            // const bar = barId.name
            let barName = bar.name;
            let barEmail = bar.email;
            console.log(barName);
            return res.status(200).json({
                total: reservas.length,
                reservas: reservas.map(
                    (bar) =>
                        `Reserva hecha en ${barName}. Contacto: ${barEmail}`
                ),
            });
        } catch (error) {
            console.log(error);
            res.status(404).send("Error consulta db home");
        }
    },

    // Agregar logout
};

module.exports = usersControllers;
