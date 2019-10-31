const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.static("css"));
app.use(express.static("img"));



app.listen(3000);