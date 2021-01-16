const tail = (list) => {
    if(list?.length > 0){
    return list[list.length-1];
    }
    return null;
};
module.exports = tail;