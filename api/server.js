const dbConnect = require("./config/dbMongo");
const express = require("express");

const cors = require("cors");

const app = express();

app.use(cors());

const users = require("./routes/usersRoutes");
const bares = require("./routes/baresRoutes");

require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", users);
app.use("/api/bares", bares);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

dbConnect();
