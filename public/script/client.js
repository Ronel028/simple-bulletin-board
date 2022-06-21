

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

// form
form.addEventListener("submit", async (e)=>{
   e.preventDefault();
   if(title.value === "" || description.value === "" || content.value === ""){
      return;
   }
   else{
      let insertData = await fetch('/insertData', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({
            'title': title.value,
            'description': description.value,
           'content': content.value
         })
      })
      addNewForm.classList.remove("d-flex");
      addNewForm.classList.add("d-none");
      let dataInserted = await insertData.json();
      if(dataInserted.message === "Save Succesfully"){
         document.querySelector("#save-success").classList.remove("d-none");
         setTimeout(()=>{
            document.querySelector("#save-success").classList.add("d-none");
         }, 1000)
      }
      else if(dataInserted.message === "Save Error"){
         document.querySelector("#save-error").classList.remove("d-none");
         setTimeout(()=>{
            document.querySelector("#save-error").classList.add("d-none");
         }, 1000)
      }
      displayData();
   }
})


// display function
let displayData = async()=>{

   let display = await fetch('/displayArticle')
   let dataResponse = await display.json();
   articleContainer.innerHTML = displayToUi(dataResponse);
}
displayData();

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
                     <a onclick="deleteArticle(${art.id})" class="btn btn-danger text-light">Delete</a>
                  </div>
               </div>
         </li>
        `
    });
    return articleContent;
}

// delete function
let deleteArticle = async (id)=>{
   let deleteData = await fetch(`/deleteData?id=${id}`, {
      method: "DELETE"
   })
   let responseDelete = await deleteData.json();
   displayData();
   console.log(responseDelete);
}