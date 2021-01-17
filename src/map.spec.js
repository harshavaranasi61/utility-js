const identity = (x) => {return x;}

const cube = (x) => {return x*x*x;}

const map = require('./map');

describe('Map', () => {

    it('Map of [1,2,3,4] with identity func is [1,2,3,4]', () => {
        expect(map([1,2,3,4],identity)).toEqual([1,2,3,4]);
    });

    it('Map of [1,2,3,4] with cube func is [1,8,27,64]', () => {
        expect(map([1,2,3,4],cube)).toEqual([1,8,27,64]);
    });
    it('Map of [{x:10}] with someObject => someObject.x + 1) func is [11]', () => {
         expect(map([{x : 10}],someObject => someObject.x + 1)).toEqual([11]);
    });


});