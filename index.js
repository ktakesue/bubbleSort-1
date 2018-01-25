//create a function expression named 'sort'
//'sort' will sort an array of values in the following sequence
// null,0,1,2,3,....9999,Infinity,'A','AA','B','BA',...'a','aa','b','bb','c','d',....,'z',...,'zzzzz'
//----if sort is given null it will return null
let array = [];

// make a helper function to swap i and j in the array //
function swap(array, i, j){
    var arr = array[i];
    array[i] = array[j];
    array[j] = arr;
}

function sort(array){
 if (array === null){
     return null;
 }
 // loop through array //       
    for (var i = 0; i < array.length; i++){
        for(var j = 1; j < array.length; j++){
            if(array[j - 1] > array[j]){
                swap(array, j - 1, j);
            }
        }
    }
    return array;
}

console.log(sort(array));








/////////do not change below
module.exports = {
    sort : sort
}