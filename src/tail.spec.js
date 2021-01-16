const tail = require('./tail');

describe('Tail', () => {

    it('Tail of [1,2,3] is 3', () => {
        expect(tail([1,2,3])).toEqual(3);
    });

    it('Tail of [] is null', () => {
        expect(tail([])).toEqual(null);
    });

});
