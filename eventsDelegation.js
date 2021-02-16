const buttons = document.querySelectorAll('button')
buttons.forEach(button => {
    button.addEventListener('click', () => console.log('clicked', button.innerHTML))
})

document.body.addEventListener('click', () => console.log('Body clicked'), {capture: true})
document.addEventListener('click', () => console.log('Document clicked'))