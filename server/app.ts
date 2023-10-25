// // Express and Database Setup
import express from "express";
import bodyParser from "body-parser";
import pool from "./db/configs/db.config.js";
require("dotenv").config();

const PORT = process.env.SERVER_PORT || 8080;

const app = express();

// Middleware functions
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Resource Routes
const profileRoutes = require("./routes/users");

// Resource Mounting
app.use("/user", profileRoutes(pool));

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
