function fibonacci(num){
    let prev = 0
    let current = 1
    for(let i=2; i<num; i++){
        next = current + prev
        prev = current
        current = next
    }
    return current
}

console.log(fibonacci(18));