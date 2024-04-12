function isPalindrome(string) {
    let reversed = ""
    for(let i=string.length-1; i>=0; i--){
        reversed += string[i]
    }
    return reversed === string
}

console.log(isPalindrome("malayalam"));
console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("string"));