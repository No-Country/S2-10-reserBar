const Bares = require("../models/Bares");
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
            const { name, description, location, password } = req.body;
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
                photos: urls.map( url => url.res ),
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
};

module.exports = baresControllers;
