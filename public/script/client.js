

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

form.addEventListener("submit", (e)=>{
   e.preventDefault();

   insertData(title, description, content);
})
// use axios to fetch data
let insertData = async(inputTitle, inputDescription, inputContent)=>{
   let insert = await axios({
      method: 'post',
      url: '/insertData',
      data: {
        title: inputTitle.value,
        description: inputDescription.value,
        content: inputContent.value
      }
    });
   console.log(insert);
}
