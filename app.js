
const express = require("express");
const bodyParser = require("body-parser");

const app = express();


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Front page
app.get("/", function (req, res) {

    res.render("carousel");
});

// About Section
app.get("/about", function (req, res) {
    res.render("about");
});

// Gibsy Section
app.get("/gibsy", function (req, res) {
    res.render("gibsy");
});

// Pane di Ferro Section
app.get("/panediferro", function (req, res) {
    res.render("panediferro");
});


// Giovanni VIII Section
app.get("/giovanni", function (req, res) {
    res.render("giovanni");
});


// app.get("/footer", function (req, res) {
//     res.render("footer");
// });


app.listen(process.env.PORT || 3000, function () {
    console.log("Server started on port 3000.");
});
