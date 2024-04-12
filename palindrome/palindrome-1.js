function isPalindrome(string) {
    const reversed = string.split("").reverse().join("")
    return string === reversed
}

console.log(isPalindrome("malayalam"));
console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("string"));