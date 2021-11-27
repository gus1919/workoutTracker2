//dotenv
require('dotenv').config();

// dependencies
const express = require('express');
const mongoose = require('mongoose');
const app = express();

const PORT = process.env.PORT || 3000;



//middleware

//connecting to mongo


//server listening
app.listen(PORT);
console.log(`Server is listening at http://localhost:${PORT}`);