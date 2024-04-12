let arr =[11,4,5,7,6,3,2,99,24,10,99]

function minmax(arr){ //O(nlog(n))
    let sorted = arr.sort((a,b) => a-b)
    let min = sorted[0];
    let max = sorted[arr.length-1]
    console.log(min, max);
}

minmax(arr)