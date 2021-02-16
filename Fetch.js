//


const URL = 'https://jsonplaceholder.typicode.com/users/'

// fetch(URL)
//     .then(response => {
//         return response.json()
//     }).then(data => {
//     data = data.map(user => user.name)
//     //console.log(data)
// })

async function getUsers() {
    let fetchData = await fetch(URL)
    if (fetchData.ok) {
        const userData = await fetchData.json()

        //fetchData.forEach(user => console.log(user.name))
        console.log(userData)
    } else {
        console.log('failed fetch')
    }
}

getUsers();


