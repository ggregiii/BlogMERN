const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/test', (req, res) => {res.json('test okzs')})

// create /register endpoint app.post
app.post('/register', (req, res) => {
    
    const{username, password} = req.body;

    res.json({requestData:{username, password}})
});

app.listen(4000);