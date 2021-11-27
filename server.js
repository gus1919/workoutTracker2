//dotenv
require('dotenv').config();

// dependencies
const express = require('express');
const mongoose = require('mongoose');
const app = express();


const PORT = process.env.PORT || 3000;

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//connecting to mongo
mongoose.connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}, () => {
    console.log("Mongoose is connected")
});


//route connections
app.use(require("./routes/html-routes"));
app.use('/api', require("./routes/api-routes"));

//server listening
app.listen(PORT);
console.log(`Server is listening at http://localhost:${PORT}`);