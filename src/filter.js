const head = require("./head");
const tail = require("./tail");

const filter = (myArray,func)=>{
    if(head(myArray) === null){
    return [];
    }
    else{
        if(func(head(myArray))){
        return [head(myArray),...filter(tail(myArray),func)];
        }
        else{
        return [...filter(tail(myArray),func)];
        }
    }

};
module.exports = filter;