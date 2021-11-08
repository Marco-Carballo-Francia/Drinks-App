const express = require("express");
const passport = require("passport")
const morgan = require("morgan");
const cors = require("cors");
const config = require("./config.js");
const indexItemRoutes = require("./routes/items/index.js");
const indexUserRoutes = require('./routes/user/index.js');
const indexTicketRoutes = require('./routes/ticket/index.js');

const app = express();
require("./routes/user/middleware.js")

// Settings
app.set("port", config.PORT);



// Middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());


// Routes
app.use("/", indexItemRoutes);
app.use('/', indexUserRoutes);
app.use('/', indexTicketRoutes);

module.exports = app;