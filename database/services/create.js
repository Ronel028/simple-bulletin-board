
const connectionDB = require("../connection");

let create = (article_title, article_desc, article_content, article_date)=>{

    return new Promise((resolve, reject)=>{

         let insertQuery = `INSERT INTO article_info (article_title, article_subtitle, article_content, article_date)
                       VALUES (?, ?, ?, ?)`;
        connectionDB.query(insertQuery, [article_title, article_desc, article_content, article_date], (error, result)=>{
            if(error){
                reject(error)
            }
            resolve(result);
        })

    })
   
}

module.exports = create;