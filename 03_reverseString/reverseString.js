const reverseString=function(string){
    const num=string.length;
    let newString="";
    for (i=1;i<=num;i++){
      newString+= string.at(num-i);
    }
    return newString;
  }

// Do not edit below this line
module.exports = reverseString;
