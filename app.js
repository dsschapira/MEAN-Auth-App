const express = require('express');
const path = require('path');
const bodyParser = require('body-parser'); //Parses the body from incoming requests
const cors = require('cors'); //allows request to API from different domain name
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

//Connect to database
mongoose.connect(config.database);

mongoose.connection.on('connected', ()=>{
    console.log('Connected to database '+config.database);
});

mongoose.connection.on('error',(err)=>{
    console.log('Database Error: '+err);
});

const app = express();

const users = require('./routes/users');

const port = 3000;

app.use(cors());

//Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

//Body Parser Middleware
app.use(bodyParser.json());

//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport); //this config file returns a function so we call the require as a function that gets passport as a parameter.

app.use('/users', users);

//Index Route
app.get('/', (req,res)=>{
    res.send('Invalid Endpoint');
});

app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

//Start Server
app.listen(port, ()=>{
    console.log('Server started on port '+port);
});