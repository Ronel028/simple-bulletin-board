
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


// use axios to fetch data
axios.get("https://jsonplaceholder.typicode.com/todos")
.then(response =>{
   console.log(response.data)
})