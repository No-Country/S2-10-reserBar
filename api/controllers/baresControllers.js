const Bares = require("../models/Bares");
const Users = require("../models/Users");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: "dnsk4tdsd",
    api_key: "213665313846968",
    api_secret: "BeQ6kgszutKGiHsyxNtYNFU4vRM",
    secure: true,
});

const baresControllers = {
    register: async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.mapped() });
            }
            const {
                name,
                description,
                location,
                password,
                email,
                capacity,
                city,
                state,
                country,
                vegan,
            } = req.body;
            // const image = req.file.originalname;

            // const uploader = async (path) =>
            //     await cloudinary.uploader.upload(path, "photos");
            const cloudinaryImageUploadMethod = async (file) => {
                return new Promise((resolve) => {
                    cloudinary.uploader.upload(file, (err, res) => {
                        if (err)
                            return res.status(500).send("upload image error");
                        resolve({
                            res: res.secure_url,
                        });
                    });
                });
            };

            const urls = [];
            const files = req.files;
            for (const file of files) {
                const { path } = file;
                const newPath = await cloudinaryImageUploadMethod(path);
                urls.push(newPath);
            }
            const bar = Bares({
                name,
                description,
                location,
                password,
                photos: urls.map((url) => url.res),
                email,
                capacity,
                city,
                state,
                country,
                vegan,
            });

            const salt = await bcrypt.genSalt(10);
            bar.password = await bcrypt.hash(password, salt);

            await bar.save();

            res.status(200).json({
                msg: "Bar creado exitosamente",
                bar,
            });
        } catch (error) {
            console.log(error);
            res.status(400).send("No se pudo crear el bar");
        }
    },
    getBares: async (req, res) => {
        try {
            const bares = await Bares.find();
            res.status(200).json({
                total: bares.length,
                bares,
            });
        } catch (error) {
            console.log(error);
            res.status(400).json({ msg: "No se puede acceder a bares" });
        }
    },
    getBar: async (req, res) => {
        try {
            let id = { _id: req.params.id };
            const bares = await Bares.findById(id);
            res.status(200).json({
                total: bares.length,
                bares,
            });
        } catch (error) {
            console.log(error);
            res.status(400).json({ msg: "No se puede acceder a bares" });
        }
    },
    editBar: async (req, res) => {
        try {
            let id = { _id: req.params.id };
            jwt.verify(req.token, process.env.SECRET, async (error, data) => {
                if (!error) {
                    const bar = await Bares.findByIdAndUpdate(id, req.body);

                    res.status(200).json({
                        msg: "Bar actualizado con exito.",
                    });
                } else {
                    res.status(401).json({ msg: "token no válido" });
                }
            });
        } catch (error) {
            console.log(error);
            res.status(400).json({ msg: "No se puede acceder a editar bar" });
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
            const bar = await Bares.findOne({ email });
            if (!bar)
                return res.status(400).json({ error: "Usuario no encontrado" });

            const validPassword = await bcrypt.compare(password, bar.password);
            if (!validPassword)
                return res.status(400).json({ error: "contraseña no válida" });

            //Si pasa las validaciones crear y firmar el jwt

            const payload = {
                bar: {
                    barName: bar.name,
                    id: bar._id,
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
                    res.json({ token, bar });
                }
            );
        } catch (error) {
            console.log(error);
            res.status(400).json({
                msg: "No se puede acceder al perfil del bar",
            });
        }
    },
    reservar: async (req, res) => {
        try {
            const idBar = { _id: req.params.id };
            const { user,date,time,visitors } = req.body;
            const userId = await Users.findById(user)
            const reservaUser = {"idBar":idBar._id,"date":date,"time":time,"visitors":visitors}
            const reservaBar = {"user_id":userId._id,"name":userId.name,"last_name":userId.last_name,"email":userId.email,"date":date,"time":time,"visitors":visitors}

            jwt.verify(req.token, process.env.SECRET, async (error, data) => {
                if (!error) {
                    await Bares.findByIdAndUpdate(idBar, {
                        $push: {
                            reserves: reservaBar,
                        },
                    });
                    const userReserve = await Users.findByIdAndUpdate(user, {
                        $push: {
                            my_reserve:reservaUser, 
                        },
                        
                    });
                    res.status(200).json(
                        userReserve
                    );
                } else {
                    res.status(401).json("Token no válido");
                }
            });
        } catch (error) {
            console.log(error);
            res.status(404).send("Error consulta db home");
        }
    },
    reservarDelete: async (req, res) => {
        try {
            const idBar = { _id: req.params.id };
            const { user,email,date} = req.body;

            jwt.verify(req.token, process.env.SECRET, async (error, data) => {
                if (!error) {
                    await Bares.findByIdAndUpdate(idBar._id, {
                        // $pull: {
                        //     reserves: user,
                        // },
                        $pull: { reserves: {email: email, date: date} } 
                    });
                    await Users.findByIdAndUpdate(user, {
                        // $pull: {
                        //     my_reserve: {idBar: idBar},
                        // },
                        $pull: { my_reserve: { idBar: idBar._id } } 
                    });
                    res.status(200).json("Reserva eliminada");
                } else {
                    res.status(401).json("Token no válido");
                }
            });
        } catch (error) {
            console.log(error);
            res.status(404).send("Error consulta db home");
        }
    },
    getReservas: async (req, res) => {
        try {
            let id = { _id: req.params.id };
            const bar = await Bares.findById(id);
            const reservas = bar.reserves;
            return res.status(200).json({
                total: reservas.length,
                reservas: reservas.map(
                    (user) =>
                        `Reserva hecha por ${user.name} ${user.last_name}. Contacto: ${user.email}`
                ),
            });
        } catch (error) {
            console.log(error);
            res.status(404).send("Error consulta db home");
        }
    },
};

module.exports = baresControllers;
