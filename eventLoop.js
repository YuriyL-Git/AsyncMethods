//


//


function test() {
    console.log('Hi 1')
    console.log('Hi 2')
    setTimeout(() => console.log('hi 4'), 0)
    new Promise((resolve, reject) => resolve('hi promise'))
        .then(message => console.log(message))
    // as soon as the promise resolve
    // it will run as soon as the function You are currently inside of is finished
    setTimeout(() => console.log('hi 3'), 10)

    console.log('Hi 5')
}


test()
