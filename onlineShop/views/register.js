
const submit = document.getElementById('submit')
const back = document.getElementById('back')
const userName = document.getElementById('userName')
const firstPassword = document.getElementById('firstPassword')
const secPassword = document.getElementById('secPassword')



//set rex rules for user name and password
const Rex = /[A-Z]{5,11}/ig
const passwordRex = /[(A-Z)|(0-9)]{5,10}/ig


//user name check
function checkUserName(user) {
    if (Rex.test(user)) {
        console.log('user name is valid')
        return true
    }
    else {
        console.log('!!! user name is not valid')
        return false
    }
}


//password check
function checkPassword(password) {
    if (passwordRex.test(password)) {
        console.log('password is correct')
        return true
    }
    else {
        console.log('!!!!password is not correct')
        return false
    }
}
//back btn
back.onclick=()=>{
    location.href='/'
}
//submit btn
submit.onclick = () => {
    let userText = userName.value
    let passwordText = firstPassword.value
    let secPasswordText = secPassword.value
    if (checkUserName(userText)) {
        if (checkPassword(passwordText)) {
            if (secPasswordText === passwordText) {
                alert('user name and password are valid')
            
            } else {
                alert('please check your password to ensure they are same')
            }

        }
    }


}