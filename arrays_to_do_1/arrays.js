
// Push Front
function pushFront(arr, val) {
    for(var i = arr.length; i>=0; i--){
        arr[i] = arr[i-1]
    }
    arr[0] =val
    return arr
}
console.log("--------------------")
console.log(pushFront([ 2, 3, 4, 5] , 1))

// Pop Front
function popFront(arr) {
    firstVal = arr[0]
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i + 1]
    }
    arr.length = arr.length - 1 
    console.log(arr)
    return firstVal
}
console.log("--------------------")
console.log(popFront([1,1,2,3,4]))


// insert At
function insertAt(arr, index, val) {
    for( var i = arr.length; i >= index; i--) {
        arr[i] = arr[i - 1]
    }
    arr[index] = val
    return arr
}
console.log("--------------------")
console.log(insertAt([1,2,4,5,6], 2, 3))

