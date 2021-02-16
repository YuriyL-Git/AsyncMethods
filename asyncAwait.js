//

//


/*function setTimeoutPromise(delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`You waited ${delay} milliseconds`)
        }, delay)
    })
}*/

/*setTimeoutPromise(250)
    .then(message => {
        console.log('1')
        console.log(message)
        return setTimeoutPromise(250)
    })
    .then(message => console.log(message))*/


function getValueWithDelay(value, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value)
        }, delay)
    })
}


function getValueWithDelayError(value, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Error during execution')
        }, delay)
    })
}


/*async function doStuff() {
    try {
        const value1 = await getValueWithDelay('testValue', 250)
        console.log(value1)
        const value2 = await getValueWithDelay('testValue2', 250)
        console.log(value2)
        const value3 = await getValueWithDelayError('Hi', 250)
        console.log(value3)
    } catch (e) {
        console.log(e)
    } finally {
        console.log('Finally')
    }
}*/

/*async function doStuff() {
    for (let i = 0; i < 10; i++) {
        const value = await getValueWithDelay(i, 550)
        console.log(value)
    }
}*/

for (let i = 0; i < 10; i++) {
    getValueWithDelay(i, 550).then(value => {console.log(value)})
}

//doStuff()





