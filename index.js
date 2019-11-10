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

app.get('/cities/population', function(req, res) {
    res.render("table");
});

app.get('/cities/migration', function(req, res) {
    res.render("cities");
});

app.get('/cities/area', function(req, res) {
    res.render("cities-area");
});

app.get('/countries', function(req, res) {
    res.render("countries-main");
});

app.get('/countries/trade', function(req, res) {
    res.render("trade");
});

app.get('/countries/population', function(req, res) {
    res.render("countries-population");
});

app.get('/countries/area', function(req, res) {
    res.render("countries-area");
});


app.listen(process.env.PORT, process.env.IP);