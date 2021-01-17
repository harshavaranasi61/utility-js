const head = require("./head");

const tail = require("./tail");

const reduce = (myArray,func,delta) => {
    if(head(myArray)===null){
     if(delta !== null || delta!== undefined || delta !== NaN || delta !== false)
     return delta;
     else
     return undefined;
    }
    else{
        if(typeof(head(myArray))==="string" && delta===undefined)delta="";
        if(typeof(head(myArray))==="number" && delta===undefined)delta=0;
        return reduce(tail(myArray),func,func(delta,head(myArray)));
    }

};

module.exports = reduce;