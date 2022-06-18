
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path")
const app = express();
const PORT = process.env.PORT || 3000;


// set body parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// serve static files
app.use('/style', express.static(path.join(__dirname, './public/styles')))
app.use('/script', express.static(path.join(__dirname, './public/script')))

// set template engine
app.set("view engine", "ejs");

app.get("/", (req, res)=>{
    res.render("index");
})

app.listen(PORT, ()=>{
    console.log("Server Started at PORT: ", PORT)
})