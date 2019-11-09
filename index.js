const express = require("express");
const app = express();
const path = require('path');

app.use(express.static("public"));
app.use(express.static("css"));
app.use(express.static("img"));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000);