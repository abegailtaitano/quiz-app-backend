const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose')

//import routes
const questionRoutes = require('./routes/questionRoutes');

app.get('/',(req,res) => {
    res.send("Welcome to Abby\'s quiz application!")
})

app.use('/api/questionRoutes', questionRoutes);

const connect = mongoose.connect("mongodb://localhost:27017/Quiz",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

connect.then(
    () => console.log('Connected correctly to server'),
    (err) => console.log(err)
);

app.listen(port, ()=> console.log(`Listening on port ${port}`));

