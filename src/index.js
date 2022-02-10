const express = require('express');
const server = express();

require('dotenv').config();

const port = process.env.PORT;

server.listen(port, () => {
    console.log('Hello World!');
});

server.use('*', (req, res) => {
    res.send('Zoinks!');
});