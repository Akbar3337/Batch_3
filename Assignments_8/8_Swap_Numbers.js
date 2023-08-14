// 8. How would you swap two numbers without using a third variable?

function Swap_Numbers(a,b) {
    let temp = a
    a = b
    b = temp

    return [a,b]
}

let a = 43;
let b = 65;
console.log(Swap_Numbers(a,b))