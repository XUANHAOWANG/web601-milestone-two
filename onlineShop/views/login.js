
window.onload=function() {
const adminText= document.getElementById('admin')
const loginForm=document.getElementById('loginForm')
const adminForm=document.getElementById('adminForm')
const adminBackButton=document.getElementById('adBack')
const register= document.getElementById('register')
const backBtn = document.getElementById('backBtn')

backBtn .onclick=()=>{
    location.href='/'
}
//register btn function
register.onclick= ()=>{
    location.href='/register'
}
//display admin form
adminText.onclick= ()=>{
loginForm.style.display='none'
adminForm.style.display='block'
}
//switch to customer login
adminBackButton.onclick= ()=>{
loginForm.style.display='block'
adminForm.style.display='none'
}



























}
