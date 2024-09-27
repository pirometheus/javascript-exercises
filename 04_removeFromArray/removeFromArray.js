const removeFromArray = function(array,...func) {
    let restParameter=func; // create an new array with arguments 
    let uzunluk=restParameter.length
    for (j=0;j<uzunluk;j++){ // loops every arguments 
      let argument=restParameter[j]
      let lenth=array.length;
      for (i=0;i<lenth;i++){ //removes the argument from given array
        let index1=array.indexOf(argument);
        if (index1>-1) {
          array.splice(index1,1);
        }
      }
    }
    return array;
  
  }

// Do not edit below this line
module.exports = removeFromArray;
