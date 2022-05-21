const dbConnect = require("./config/dbMongo");
const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();

// const users = require("./routes/usersRoutes");
// const message = require("./routes/messageRoutes");
// const courses = require("./routes/coursesRoutes");
// const news = require("./routes/newsRoutes");

require("dotenv").config();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// app.use("/api/users", users);
// app.use("/api/message", message);
// app.use("/api/courses", courses);
// app.use("/api/news", news);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

dbConnect();