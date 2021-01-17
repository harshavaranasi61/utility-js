const filter = require("./filter");

const filterUpperCase = (x) => {return x.charCodeAt(0)>=65 && x.charCodeAt(0)<=90;}

describe('Filter', () => {

    it('Filter of [1,2,3,4] with x => true is [1,2,3,4]', () => {
        expect(filter([1,2,3,4],x=>true)).toEqual([1,2,3,4]);
    });

    it('Filter of [1,2,3,4] with x => false is []', () => {
            expect(filter([1,2,3,4],x=>false)).toEqual([]);
    });


    it('Filter of [1,2,3,4] with x => x>1 is [2,3,4]', () => {
            expect(filter([1,2,3,4],x=>x>1)).toEqual([2,3,4]);
     });

    it('Filter of [a,B,c,D] with filterUpperCase is [B,D]', () => {
            expect(filter(['a','B','c','D'],filterUpperCase)).toEqual(['B','D']);
    });

});