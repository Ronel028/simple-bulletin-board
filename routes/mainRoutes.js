
const express = require("express");
const path = require("path")
const router = express.Router();

const create = require("../database/services/create");

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

module.exports = router;