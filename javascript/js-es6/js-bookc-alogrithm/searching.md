# Linear Searching.- 
- Hoạt động theo cách đi qua từng element. 
- Time complexity : O(n);


# Binary Searchig .
- Hoạt đồng khi data được sort. Value có thể được check từ giữa r qua trái hoặc qua phải.


function binarySearch(array,n){
    var lowIndex = 0, highIndex = array1.length-1;
    while(lowIndex<=highIndex){
        var midIndex = Math.floor((highIndex+lowIndex) /2);
        if (array[midIndex]==n) {
            return midIndex;
        } else if (n>array[midIndex]) {
            lowIndex = midIndex;
        } else {
            highIndex = midIndex;
        }
    }
    return -1;
}
console.log(binarySearch([1,2,3,4], 4)); // true
console.log(binarySearch([1,2,3,4], 5)); // -1