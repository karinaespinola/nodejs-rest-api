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

// Connect to DB
connectToDB();
// We start listening to the server
app.listen(3000);

async function connectToDB() {
    try {
        mongoose.Promise = global.Promise;
        // Connect to the MongoDB cluster
           const connection = await mongoose.connect(
            process.env.DB_CONNECTION,
            { useNewUrlParser: true, useUnifiedTopology: true },
            (error) => {
                if(error) {
                    console.log(error);
                }
                else {
                    console.log('DB connected')
                }
            }
        );

    } catch (e) {
        console.log(e);
    }
}

