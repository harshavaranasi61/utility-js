const head = require("./head");

const tail = require("./tail")



const maxElement = (list,output) => {
    if(list?.length > 0){
        const element = head(list);

        if(!output || element>output){
        output=element;
        }

        return maxElement(tail(list),output);
    }
    return output
};

const max = (list) => {
    return maxElement(list, undefined);
};

module.exports = max;