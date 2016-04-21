function bubbleSort(arr) {
  var tempI;
  var tempIPlusOne
  var unsorted = true;
  var times = 1

  while (unsorted) {
    unsorted = false;
    for (var i = 0; i < arr.length - times; i++) {
      if (arr[i] > arr[i + 1]) {
        unsorted = true;
        tempI = arr[i];
        tempIPlusOne = arr[i + 1];
        arr[i] = tempIPlusOne
        arr[i + 1] = tempI
      }
    }
    times++
  }

  return arr;
}