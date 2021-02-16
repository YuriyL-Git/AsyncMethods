//


const URL = 'https://jsonplaceholder.typicode.com/users/'

// fetch(URL)
//     .then(response => {
//         return response.json()
//     }).then(data => {
//     data = data.map(user => user.name)
//     //console.log(data)
// })

/*async function getUsers() {
    let fetchData = await fetch(URL)
    if (fetchData.ok) {
        const userData = await fetchData.json()

        //fetchData.forEach(user => console.log(user.name))
        console.log(userData)
    } else {
        console.log('failed fetch')
    }
}*/

const postURL = 'https://jsonplaceholder.typicode.com/posts'

async function postData() {
    const requestData = await fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: 'New post'
        })
    })

    const post = await requestData.json()
    console.log(post)
}


postData()
//getUsers();

const commentsURL = 'https://jsonplaceholder.typicode.com/comments?postId=1'

fetch(commentsURL)
    .then(res => res.json())
    .then(comments => console.log(comments))



