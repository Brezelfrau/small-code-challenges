// Sort an array by the largest numbers in a new array

var array = [2, 33, 19, 27, 51, 12, 1];
var array2 = [];
var largest = array[0];
var idxOfLargest = 0;


for (var i = 0; i < array.length; i++) {    
   
    if (largest < array[i]) {
        largest = array[i];
        idxOfLargest = i;
        
    } 
    
    if (i == array.length - 1) {
        array2.push(array[idxOfLargest]);
        array.splice(idxOfLargest, 1);
        i = -1;                                   // - 1, because while getting to the top of the loop, i++ will be executed and i = 1, but we want i = 0
        largest = array[0];
        idxOfLargest = 0;
    }
}

console.log(array2);
console.log(array);

