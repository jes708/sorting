function split(wholeArray) {
    arr = wholeArray.slice()
    if (arr.length === 1) {
      return [arr];
    }
    var secondHalf = arr.splice(arr.length / 2);
    var firstHalf = arr;
    return [firstHalf, secondHalf];
}

function mergeSort(array) {
  var currentArray = array;
  var arr1 = array[0];
  var arr2 = array[1];
  var result = [];

  while (true){
    if(arr1[0] < arr2[0]){
      result.push(arr1.splice(0, 1)[0]);
      if (!arr1.length){
        return result.concat(arr2);
      }
    } 
    else if (arr1[0] >= arr2[0]){
      result.push(arr2.splice(0, 1)[0]);
      if (!arr2.length){
        return result.concat(arr1);
      }
    }
  }

}