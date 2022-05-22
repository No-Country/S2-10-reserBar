const monogoose = require("mongoose");

const BaresSchema = new monogoose.Schema(
    {
        name: { type: String, required: true },

        location: { type: String, required: true },

        description: { type: String, unique: true, required: true },

        photos: { type: Array },

        reserves: {
            type: [
                {
                    type: Schema.Types.ObjectId,
                    ref: "Users",
                },
            ],
            validate: [arrayLimit, "{PATH} exceeds the limit of 10"],
        },
    },
    {
        timestamps: true, //TODO: crea automaticamente, los campos createdAT, updateAt
        versionKey: false,
    }
);

function arrayLimit(val) {
    return val.length <= 10;
}

module.exports = monogoose.model("Bares", BaresSchema);
