describe('Merge Sort', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect(mergeSort([[1, 3, 5, 8], [2, 4, 6, 7]])).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });
});

describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([5, 1, 3, 8, 2, 6, 4, 7])).toEqual([[5, 1, 3, 8], [2, 6, 4, 7]]);
  });
});

