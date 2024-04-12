function anagram(str1, str2){
    if(str1.length != str2.length) return false
    let acc1={}
    let acc2={}
    for(let i=0; i<str1.length && str1.length === str2.length; i++){
        if(acc1[str1[i]]){
            acc1[str1[i]] = acc1[str1[i]] + 1
        }
        if(acc2[str2[i]]){
            acc2[str2[i]] = acc2[str2[i]] + 1
        } 
        if(!acc1[str1[i]]){
            acc1[str1.charAt(i)] = 1
        }
        
        if(!acc2[str2[i]]){
            acc2[str2.charAt(i)] = 1
        }

    }

    for(let j=0; j<str1.length; j++){
        // console.log(acc1,acc2)
        // console.log(acc1[str1[j]]);
        // console.log(acc2[str1[j]]);
        if(acc1[str1[j]] != acc2[str1[j]]) {
            
            return false
            
        }
    }
    return true
}
// anagram("llistten", "sillentt")

console.log(anagram("proxy", "porxy"));
console.log(anagram("silent", "listen"));
console.log(anagram("teams", "meat"));
console.log(anagram("fats", "fast"));
console.log(anagram("car", "arc"));