describe('Bubble Sort', function(){
    it('handles an empty array', function(){
        expect( bubbleSort([]) ).toEqual( [] );
    });

    it('sorts an array with one number', function(){
        expect( bubbleSort([1]) ).toEqual( [1] );
    });

    it('sorts an array with many number', function(){
        expect( bubbleSort([6, 2, 1, 4, 8, 3]) ).toEqual( [1, 2, 3, 4, 6, 8] );
    });

    it('does not mess up your sorted array', function(){
        expect( bubbleSort([2, 3, 4]) ).toEqual( [2, 3, 4] );
    });

    it('sorts a random array', function(){
    var a = Math.random(),
        b = Math.random(),
        c = Math.random(),
        d = Math.random(),
        e = Math.random(),
        f = Math.random(),
        arr = [a, b, c, d, e, f];    
        expect( bubbleSort(arr) ).toEqual( arr.sort(function(a,b) {return a - b;}) );
    });

});