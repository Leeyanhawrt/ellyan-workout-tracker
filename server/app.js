"use strict";
// // Express and Database Setup
const express = require("express");
const bodyParser = require("body-parser");
const pool = require("./db/configs/db.config.js");
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const app = express();
// Middleware functions
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Resource Routes
const profileRoutes = require("./routes/profile");
// Resource Mounting
app.use("/profile", profileRoutes(pool));
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
console.log(process.env);
