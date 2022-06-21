
const express = require("express");
const path = require("path")
const router = express.Router();

const create = require("../database/services/create");
const dislay = require("../database/services/read");
const deleteData = require("../database/services/delete");

router.get("/", (req, res)=>{
    res.render(path.join(__dirname, '../views/index.ejs'));
})


 // insert data to database
router.post('/insertData', async (req, res)=>{

    try {
        let date = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) 
        let { title, description, content} = req.body;
        await create(title, description, content, date);
        res.json({
            message: "Save Succesfully",
            status: 200
        });

    } catch (error) {
        res.json({
            message: "Save Error",
            error: error
        })
        console.log(error)
    }

})

// display data to database
router.get('/displayArticle', async (req, res)=>{
    
    try {
        let dataDisplay = await dislay();
        res.json(dataDisplay);
    
    } catch (error) {
        console.log(error)
    }

})

// delete data from database
router.delete("/deleteData", async (req, res)=>{
    let id = req.query.id;
    try {
        let deleteArticle = await deleteData(id);
        console.log(deleteArticle);
        res.json({
            message : "delete succesfully",
            status : "200"
        })
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;