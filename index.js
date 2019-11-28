const express = require('express');

const app = express();

app.get('/', function(req, res) {
    res.send(`Hello World`);
});

const port = process.env.PORT || 4000;
const server = app.listen(port, () => console.info(`Listening on port ${port}...`));


module.exports = server; // added test
