const head = require("./head");

const tail = require("./tail");



const minElement = (list,output) => {
    if(list?.length > 0){
        const element = head(list);

        if(!output || element<output){
        output=element;
        }

        return minElement(tail(list),output);
    }
    return output
};

const min = (list) => {
    return minElement(list, undefined);
};

module.exports = min;