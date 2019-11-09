const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.render("index");
});

app.get('/cities', function(req, res) {
    res.render("cities-main");
});

app.get('/cities/migration', function(req, res) {
    res.render("cities");
});





app.listen(process.env.PORT, process.env.IP);