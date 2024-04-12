function fibonacci(num){
    let prev = 0
    let current = 1
    for(let i=2; i<num; i++){
        current = current + prev
        prev = current - prev
    }
    return current
}

console.log(fibonacci(18));
