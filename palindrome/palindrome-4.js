function isPalindrome(string) {
    for(let i=0; i<string.length/2; i++){
        if(string[i] != string[string.length-1-i]){
            return false
        }
    }
    return true
}

console.log(isPalindrome("malayalam"));
console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("string"));