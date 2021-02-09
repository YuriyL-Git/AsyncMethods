setTimeout(() => console.log('hi'), 1000)
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