//setTimeout(() => console.log('hi'), 1000)
const button = document.querySelector('button');
button.addEventListener('click', () =>
    console.log('clicked from orig listener'))

function addClickEventListener(element, callback) {
    element.addEventListener('click', callback)
}

function callbackFunc() {
    console.log('clicked from custom listener')
}

addClickEventListener(button, callbackFunc)

//promises
const promise = new Promise((resolve, reject) => {
    const sum = 1 + 1
    if (sum === 3) {
        resolve('Success')
    } else {
        reject('Error')
    }
})

promise
    .then(message => {
        console.log(message)
    })
    .catch(err => {
        console.log(err)
    })

// setTimeout function promise
function setTimeoutPromise(duration) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, duration)
    })
}

setTimeoutPromise(250)
    .then(() => {
        console.log('1')
        return setTimeoutPromise(250)
    })
    .then(() => {
        console.log('2')
        return setTimeoutPromise(250)
    })
    .then(() => {
        console.log('3')
        return setTimeoutPromise(250)
    })
    .then(() => {
        console.log('4')
        return setTimeoutPromise(250)
    })
    .then(() => {
        console.log('5')
        return setTimeoutPromise(250)
    })


function addEventListenerPromise(element, method) {
    return new Promise((resolve, reject) => {
        element.addEventListener(method, e => {
            resolve(e)
        })

    })
}

addEventListenerPromise(button, 'click')
    .then(e => {
        console.log('clicked from promise')
        console.log(e)
    })




