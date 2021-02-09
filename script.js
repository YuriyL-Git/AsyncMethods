//setTimeout(() => console.log('hi'), 1000)
const button = document.querySelector('button');
button.addEventListener('click', () =>
    console.log('clicked from orig listener'))

function addClickEventListener(element, callback)
{
    element.addEventListener('click', callback)
}

function callbackFunc()
{
    console.log('clicked from custom listener')
}

addClickEventListener(button, callbackFunc)

//promises
const promise = new Promise((resolve, reject) =>
{
    const sum = 1 + 1
    if (sum === 3)
    {
        resolve('Success')
    } else
    {
        reject('Error')
    }
})

promise
    .then(message =>
    {
        console.log(message)
    })
    .catch(err =>
    {
        console.error(err)
    })