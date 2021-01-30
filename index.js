const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./routes/route'); 

const app = express();
const MONGODB_URI = 'mongodb+srv://bhavesh_05:Bhavesh2017@cluster0-yuok1.mongodb.net/ecs?retryWrites=true&w=majority';

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(authRoutes);
app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({ message: message, data: data });
});
mongoose.connect(MONGODB_URI)
    .then(res => {
        console.log("Connected");
        app.listen(process.env.PORT || 3005);
    })
    .catch(err => {
        console.log(err);
    });