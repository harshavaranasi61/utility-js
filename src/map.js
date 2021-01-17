const head = require("./head");
const tail = require("./tail");


const map = (myArray,func) =>{
    if(head(myArray) !== null){
        return [func(head(myArray)),...map(tail(myArray),func)];
    }
    else{
    return [];
    }
};

module.exports = map;