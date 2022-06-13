const monogoose = require("mongoose");

const BaresSchema = new monogoose.Schema(
    {
        name: { type: String, required: true },

        password: { type: String, required: true },

        email: { type: String, unique: true, required: true },

        location: { type: String, required: true },

        city: { type: String, required: true },

        state: { type: String, required: true },

        country: { type: String, required: true },

        capacity: { type: Number, required: true },

        description: { type: String, unique: true, required: true },

        photos: [String],

        vegan: { type: Boolean, default: true},

        reserves: [
            {
                // type: monogoose.Schema.Types.ObjectId,
                // ref: "Users",
                // autopopulate: true
                type:Object
            },
        ],
    },
    {
        timestamps: true, //TODO: crea automaticamente, los campos createdAT, updateAt
        versionKey: false,
    }
);

BaresSchema.plugin(require("mongoose-autopopulate"));

module.exports = monogoose.model("Bares", BaresSchema);
