const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();


app.use(bodyParser.json());
// import routes
const postsRoute = require('../routes/posts')

app.use('/products', postsRoute);

// ROUTES
app.get('/',(req,res) => {
    res.send('we are on home');
}); 

console.log("website on http://localhost:" + process.env.PORT);

mongoose.connect(process.env.MONGO_URI,() => {
        console.log('connected to DB')
});

// Process.env använder sig av PORT valuen in ENV filen
app.listen(process.env.PORT);