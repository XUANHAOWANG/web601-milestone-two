
//main page function
const item = document.getElementsByClassName('product')
const searchText = document.getElementById('searchText')
const searchBar = document.getElementById('searchBar')

//search bar function


//item on click function 
for (let i = 0; i < item.length; i++) {
    item[i].onclick = () => {
        // const itemName=item[i].firstElementChild.innerHTML
        // alert(` ${itemName} `)

        location.href = `/login`

    }
}

//customerPage
const cartIcon = document.getElementById('cart')

cartIcon.onclick = () => {
    location.href ='/cartPage'
}


