//

//

document.addEventListener('click', event => {
    if (event.target.matches('.cool')) {
        console.log(event.target.innerHTML)
    }
})

const newButton = document.createElement('button')
newButton.innerText = 'newButton'
document.body.appendChild(newButton)
