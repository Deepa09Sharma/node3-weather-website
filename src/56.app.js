// es6 aside: default function parameter

// const greeter = (name) => {
//     console.log('hello ' + name)
// }

// greeter('Deepa')
// greeter()// if will give empty bracket it will show undefined

const greeter = (name = 'user', age) => { // if will gave name as user then it will print user in the place of undefined
    console.log('hello ' + name)
}

greeter('Deepa')
greeter()// if will give empty bracket it will show undefined