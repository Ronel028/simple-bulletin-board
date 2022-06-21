

const connectionDB = require("../connection");

let deleteQuery = (id)=>{

    return new Promise((resolve, reject)=>{

        let deleteQuery = `DELETE FROM article_info WHERE id=?;`;
        
        connectionDB.query(deleteQuery,[id], (error, result)=>{
            if(error){
                reject(error)
            }
            resolve(result);
        })
    })
   
}

module.exports = deleteQuery;