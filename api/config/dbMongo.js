const mongoose = require("mongoose");

const dbConnect = () => {
    const DB_URI_MONGO = process.env.URI_DB;
    mongoose
        .connect(DB_URI_MONGO, {
            useNewUrlParser: true,
            useUniFiedTopology: true,
        })
        .then(() => {
            console.log("Database connected successfully!");
        })
        .catch((err) => {
            console.log("Error connecting with error code:", err);
        });
};
module.exports = dbConnect;
