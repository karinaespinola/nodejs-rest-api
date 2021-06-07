const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv/config');

// Import routes
app.use(express.urlencoded({extended: true}));
app.use(express.json())

const postRoutes = require('./routes/posts');

app.use('/posts', postRoutes);

// We can create routes
app.get('/', (req, res) => {
    res.send('We are on home');
});

connectToDB();

// Connect to DB



// We start listening to the server
app.listen(3000);

async function connectToDB() {
    mongoose.connect( 
            process.env.DB_CONNECTION,
            { 
                useNewUrlParser: true,
                useUnifiedTopology: true
            },
            () => console.log('Connected to DB')
        )
        .catch(error => console.log(error));
}