

const connectionDB = require("../connection");

let display = ()=>{

    return new Promise((resolve, reject)=>{

        let displayQuery = `SELECT * FROM article_info`;
        
        connectionDB.query(displayQuery,(error, result)=>{
            if(error){
                reject(error)
            }
            resolve(result);
        })
    })
   
}

module.exports = display;