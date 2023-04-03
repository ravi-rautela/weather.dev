const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT || 3000;

// Public static path
const staticPath = path.join(__dirname, '../public');
const template_path = path.join(__dirname, '../templates/views');
const partial_path = path.join(__dirname, '../templates/partials');
app.use(express.static(staticPath));


// use template engine
app.set('view engine', 'hbs');
app.set('views', template_path);
hbs.registerPartials(partial_path);



// Routing section
app.get("", (req, res) => {
    res.render("index");
})
app.get("/about", (req, res) => {
    res.render("about");
})
app.get("/weather", (req, res) => {
    res.render("weather");
})

app.get("*", (req, res) => {
    res.render("error");
})


// listening section
app.listen(port, (req, res) => {
    console.log(`server listening at http://localhost:${port}`);
});