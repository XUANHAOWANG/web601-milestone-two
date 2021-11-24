
//administer function
const addBtn = document.getElementById('addBtn');
const backBtn = document.getElementById('backBtn')
const addProductForm = document.getElementById('addProduct')
const addPageBody = document.getElementById('addPageBody')
const deleteItem = document.getElementsByClassName('deleteItem')
const updateItem = document.getElementById('updateItem')
const deleteName = document.getElementById('itemName')




//click add button to show the form of adding products
addBtn.onclick=() => {
    addProductForm.className = "add-form-show"
    addProductForm.style.display = 'block'
    addPageBody.className = "add-page-Body"

}
// back btn on add new product click to close form
backBtn.onclick=() => {
    addProductForm.style.display = 'none'
    addPageBody.className = ""
}


//admin page



//  for(let i = 0; i < updateBtn.length; i++){
//         updateBtn[i].onclick= ()=>{
//             location.href='/updateAdmin'
//         }
    

// }


// for (let i = 0; i <item.length; i++){

//     for (let j= 0; j < updateBtn.length; j++) {

//         if(i==j){
//             updateBtn[j].addEventListener('click', () => {
        
// for (let z= 0; z< item.length; z++){
//     if(z==j){

//         updateForm[z].className = 'form-update-open';
//         addPageBody.className = "add-page-Body"
//     }
// }
//     })
//  }  
// }
// updateBack.addEventListener('click', () => {
//     updateProduct.style.display = 'none';
//     addPageBody.className = ""
// })
// }









