//


//

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        return response.json()
    }).then(data => {
    data = data.map(user => user.name)
    //console.log(data)
})

async function getUsers() {
    let fetchData = await (await fetch('https://jsonplaceholder.typicode.com/users')).json()
    fetchData.forEach(user => console.log(user.name))
   // console.log(fetchData)
}

getUsers()