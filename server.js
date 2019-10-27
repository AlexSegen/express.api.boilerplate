const express = require("express");
const app = express();
app.use(express.json())


//Database Connection
const db = require("./src/services/mongoose");
db();

//Routes
const apiRouter = require('./src/routes')
app.use('/api', apiRouter);

//App start
app.listen(3000, () => console.log("Server has started"));