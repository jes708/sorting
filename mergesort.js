function split(wholeArray) {
    var arr = wholeArray.slice()
    if (arr.length === 1) {
      return [arr];
    }
    var secondHalf = arr.splice(arr.length / 2);
    var firstHalf = arr;
    return [firstHalf, secondHalf];
}

function mergeSort(array) {
  // If our array is one or zero in length, then it is sorted
  if (array.length < 2) {
    return array;
  }
  // Otherwise, it needs to be split and sorted
  var splits = split(array);
  var left = splits[0];
  var right = splits[1];
  // We will attempt to merge the two halves
  return merge(mergeSort(left), mergeSort(right));
}



  function merge(arr1, arr2) {
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





    // if (arr[0].length !== 1) {
    //   mergeSort(arr[0])
    //   mergeSort(arr[1])
    // }

// var jkl = [];
// function recursion(array) {
//   var splitArray = split(array);
//   if (splitArray[0].length > 1) {
//     jkl.push(recursion(array[0]))
//   }
//   if (splitArray[1].length > 1) {
//     jkl.push(recursion(array[1]))
//   }
//   return jkl
// }





  // function splitAll(array){
  //   var timesToSplit = 0;

  //   var module = 0;

  //   var currentLength = array.length;

  //   while (currentLength / 2 > 1){
  //     module = currentLength % 2;
  //     currentLength /= 2;
  //     timesToSplit++;
  //   }

  //   if(module !== 0){
  //     timesToSplit++;
  //   }
  //   return timesToSplit;
  // }