let arr =[11,4,5,7,6,3,2,1,124,10,99]

function minmax(arr){ //O(n)
    let max = arr[0]
    let min = arr[1]
    for(let i=0; i<arr.length; i++){
        if(max<arr[i]){
            max = arr[i]
        }
        if(min>arr[i]){
            min = arr[i]
        }
    }
    return ({min, max})
}

console.log(minmax(arr))