function factorial(n){
    let val = 1
    for(let i=n; i>0 ; i--){
         val = val * i
    }
    return val
}

console.log(factorial(10));