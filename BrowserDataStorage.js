//

// Local Storage| Cookies       | Session Storage
// 10MB         | 4KB           | 5MB
// Never Expires| Manual        | Expire on tab close
// Client access| Client/Server | Client access
// Easy to use  | Hard to use   | Easy

//------------LOCAL AND SESSION STORAGES-------------

// localStorage.setItem('Name', 'Test value')
//sessionStorage.setItem('Age', '25')

//localStorage.setItem('Name', 'New test value') // update value

//localStorage.removeItem('Name') //remove items
//sessionStorage.removeItem('Age')

//console.log(localStorage.getItem('Name'))

//---------COOKIES-------------------------------
const date = new Date(9999, 1, 1).toUTCString() //expiration date
const pastDate = new Date(1999, 1, 1).toUTCString()
document.cookie = `name=Kyle; expires=${date}`

document.cookie = `name=; expires=${pastDate}` // to delete the cookies



