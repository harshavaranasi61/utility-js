const reduce = require("./reduce");

describe('Reduce', () => {

    it('reduce([],(x,y)=>x+y)] is undefined', () => {
        expect(reduce([],(x,y)=>x+y)).toEqual(undefined);
    });

    it('reduce([],(x,y)=>x+y,10) is 10', () => {
            expect(reduce([],(x,y)=>x+y,10)).toEqual(10);
    });
    it('reduce([1,2,3],(x,y)=>x+y)] is 6', () => {
        expect(reduce([1,2,3],(x,y)=>x+y)).toEqual(6);
    });

    it('reduce([a,b,c],(x,y)=>x+y) is abc', () => {
            expect(reduce(['a','b','c'],(x,y)=>x+y)).toEqual("abc");
     });

    it('reduce([a,b,c],(x,y)=>x+y,z) is zabc]', () => {
            expect(reduce(['a','b','c'],(x,y)=>x+y,'z')).toEqual("zabc");
    });

});