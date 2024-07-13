const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/test', (req, res) => {res.json('test okzs')})

// create /register endpoint app.post
app.post('/register', (req, res) => {res.json("register okzs");

});

app.listen(4000);