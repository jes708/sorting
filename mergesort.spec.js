describe('Merge Sort', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect(merger([1, 3, 5, 8], [2, 4, 6, 7])).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });
});

describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([5, 1, 3, 8, 2, 6, 4, 7])).toEqual([[5, 1, 3, 8], [2, 6, 4, 7]]);
  });
});

// 

// length 8 = 3 steps
// [1,2,3,4,5,6,7,8]
// [[1,2,3,4],[5,6,7,8]]
// [[[1,2],[3,4]],[[5,6],[7,8]]]
// [[[[1],[2]]]]

// length 7 = 3 steps
// [1,2,3,4,5,6,7]
// [1,2,3] [4, 5, 6, 7]
// [1] [2,3] [4,5] [6,7]
// 3

// length 9 = Math.ceil(Math.log2(9)) = 4 steps
// [1,2,3,4,5,6,7,8,9]
// [[1,2,3,4],[5,6,7,8,9]]
// [[[1,2],[3,4]],[[5,6],[7,8,9]]]


// mergeSort([8,3,6,1]) = [1,3,6,8]
// mergeSort([8,3,6,1]) = merge([3,8], [1,6])
// mergeSort([8,3,6,1]) = merge(mergeSort([8, 3]), mergeSort[6, 1])

// mergeSort([8,3]) = [3, 8]
// mergeSort([8,3]) = merge([8], [3])
// mergeSort([8,3]) = merge(mergeSort([8]), mergeSort[3])

// mergeSort([8]) = [8]
// mergeSort([3]) = [3]

// mergeSort([6,1]) = [1, 6]
// mergeSort([6,1]) = merge([6], [1])
// mergeSort([6,1]) = merge(mergeSort([6]), mergeSort[1])

// mergeSort([6]) = [6]
// mergeSort([1]) = [1]