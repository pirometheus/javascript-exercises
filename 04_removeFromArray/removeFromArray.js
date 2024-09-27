const removeFromArray = function(array,argument1,argument2) {
  
    let lenth=array.length;
    for (i=0;i<lenth;i++){
      let index1=array.indexOf(argument1);
      if (index1>-1) {
        array.splice(index1,1);
      }
      let index2=array.indexOf(argument2);
      if (index2>-1) {
        array.splice(index2,1);
      }
    }
    return array;
  }

// Do not edit below this line
module.exports = removeFromArray;
