const head = require("./head");
const tail = require("./tail");


const map = (myArray,callBack) =>{
    if(head(myArray) !== null){
        return [callBack(head(myArray)),...map(tail(myArray),callBack)];
    }
    else{
    return [];
    }
};

module.exports = map;