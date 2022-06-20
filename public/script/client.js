

console.log("Hello World")

let addNewBtn = document.querySelector("#add-new-article");
let addNewForm = document.querySelector("#add-new-form");
const closeBtn = document.querySelector("#close-icon");

// add new article form display
addNewBtn.addEventListener("click", ()=>{
   addNewForm.classList.remove("d-none")
   addNewForm.classList.add("d-flex")
})
// close icon
closeBtn.addEventListener("click", ()=>{
   addNewForm.classList.remove("d-flex")
   addNewForm.classList.add("d-none")
})


let form = document.querySelector("#form");
let title = document.querySelector("#input-title");
let description = document.querySelector("#input-description");
let content = document.querySelector("#input-content");
let articleContainer = document.querySelector("#article-container");

form.addEventListener("submit", (e)=>{
   e.preventDefault();

   insertData(title, description, content);
   console.log("Save success")
   displayData();
})
// insert function
let insertData = async(inputTitle, inputDescription, inputContent)=>{

   let insertData = await fetch('/insertData', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
         title: inputTitle.value,
         description: inputDescription.value,
         content: inputContent.value
      })
   })
   return insertData;
}

// display function
let displayData = async()=>{
   let displayData = await fetch('/displayArticle',{
      method: 'get'
   })
   
   let dataResponse = await displayData.json()
   console.log(dataResponse)
   articleContainer.innerHTML = displayToUi(dataResponse);
}


let displayToUi = (article)=>{
    let articleContent = "";
    article.forEach(art => {
        articleContent += `
         <li>
            <div class="card" style="width: 18rem;">
                  <div class="card-body">
                     <h5 class="card-title">${art.article_title}</h5>
                     <h6 class="card-subtitle mb-2 text-muted">${art.article_date}</h6>
                     <p class="card-text">${art.article_subtitle}</p>
                     <a href="#" class="btn btn-info text-light">Read More</a>
                     <a href="#" class="btn btn-warning text-light">Edit</a>
                     <a href="#" class="btn btn-danger text-light">Delete</a>
                  </div>
               </div>
         </li>
        `
    });
    return articleContent;
}

displayData();