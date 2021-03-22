
const express = require("express");
const bodyParser = require("body-parser");

const app = express();


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get("/", function (req, res) {

    res.render("carousel");
});
app.get("/about", function (req, res) {
    res.render("about");
});
app.get("/gibsy", function (req, res) {
    res.render("gibsy");
});
app.get("/panediferro", function (req, res) {
    res.render("panediferro");
});


// app.get("/footer", function (req, res) {
//     res.render("footer");
// });


app.listen(3000, function () {
    console.log("Server started on port 3000.");
});
