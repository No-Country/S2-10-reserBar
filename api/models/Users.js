const monogoose = require("mongoose");

const UserSchema = new monogoose.Schema(
    {
        name: { type: String, required: true },

        last_name: { type: String, required: true },

        email: { type: String, unique: true, required: true },

        password: { type: String, required: true },

        my_reserve: [
            {
                type: Object,
                ref: "Bares",
                date:{type: String},
                time:{type: String},
                visitors:{type: Number},
                autopopulate: true
            },
        ],
        
    },
    {
        timestamps: true, //TODO: crea automaticamente, los campos createdAT, updateAt
        versionKey: false,
    }
);

// UserSchema.plugin(require("mongoose-autopopulate"));

module.exports = monogoose.model("Users", UserSchema);
