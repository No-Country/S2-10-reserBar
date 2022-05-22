const monogoose = require("mongoose");

const UserSchema = new monogoose.Schema(
    {
        name: { type: String, required: true },

        last_name: { type: String, required: true },

        email: { type: String, unique: true, required: true },

        password: { type: String, required: true },
    },
    {
        timestamps: true, //TODO: crea automaticamente, los campos createdAT, updateAt
        versionKey: false,
    }
);
module.exports = monogoose.model("Users", UserSchema);
