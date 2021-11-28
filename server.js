//dotenv
require('dotenv').config();

// dependencies
const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const app = express();


const PORT = process.env.PORT || 3000;

//middleware
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//connecting to mongo and making sure its working
mongoose.connect(process.env.ATLAS_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true
});
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))


//route connections
app.use('/api', require("./routes/api-routes"));
app.use(require("./routes/html-routes"));

//server listening
app.listen(PORT);
console.log(`Server is listening at http://localhost:${PORT}`);