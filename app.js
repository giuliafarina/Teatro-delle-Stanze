
const express = require("express");
const bodyParser = require("body-parser");
const imagemin = require("imagemin");
const imageminMozjpeg = require('imagemin-mozjpeg');

(async () => {
    await imagemin(['images/*.jpg'], 'build/images', {
        use: [
            imageminMozjpeg()
        ]
    });

    console.log('Images optimized');
})();

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

// Attori Section
app.get("/attori", function (req, res) {
    res.render("attori");
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
// Melodie Stonate
app.get("/melodiestonate", function (req, res) {
    res.render("melodiestonate");
})
// Taglio del Bosco Section
app.get("/tagliodelbosco", function (req, res) {
    res.render("tagliodelbosco");
})

// Gallery Section
app.get("/gallery", function (req, res) {
    res.render("gallery");
})

// Archivio Section
app.get("/archivio", function (req, res) {
    res.render("archivio");
})

// app.get("/footer", function (req, res) {
//     res.render("footer");
// });


app.listen(process.env.PORT || 3000, function () {
    console.log("Server started on port 3000.");
});
