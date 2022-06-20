
const express = require("express");
const path = require("path")
const router = express.Router();

const create = require("../database/services/create");
const dislay = require("../database/services/read");

router.get("/", (req, res)=>{
    res.render(path.join(__dirname, '../views/index.ejs'));
})


 // insert data to database
router.post('/insertData', async (req, res)=>{

    try {
        let date = new Date().toLocaleString();
        let { title, description, content} = req.body;

        let insertData = await create(title, description, content, date);
        console.log(insertData);
        res.json({message: "Save Succesfully"});

    } catch (error) {
        console.log(error)
    }

})

// display data to database
router.get('/displayArticle', async (req, res)=>{
    
    try {
        let dataDisplay = await dislay();
        console.log(dataDisplay);
        res.json(dataDisplay);
    
    } catch (error) {
        console.log(error)
    }

})

module.exports = router;