const buttons = document.querySelectorAll('button')
buttons.forEach(button => {
    button.addEventListener('click', e => {
        e.stopPropagation()
        console.log('clicked', button.innerHTML)
    })
})

document.body.addEventListener('click', () => console.log('Body clicked'))
document.addEventListener('click', () => console.log('Document clicked'))