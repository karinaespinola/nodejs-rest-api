const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv/config');

// Import routes

const postRoutes = require('./routes/posts');

app.use('/posts', postRoutes);

// We can create routes
app.get('/', (req, res) => {
    res.send('We are on home');
});



// Connect to DB
mongoose.connect( 
    process.env.DB_CONNECTION,
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    () => console.log('Connected to DB')
)

// We start listening to the server
app.listen(3000);

