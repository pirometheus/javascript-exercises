const repeatString = function(string,num) {
    let newString=string;
    if (num==0){
        return "";
    } else if (num<0){
        return "ERROR";
    }
    for (i=1;i<num;i++) {
      newString=newString+string
    }
    return newString;  
  }
repeatString('hey',3);

// Do not edit below this line
module.exports = repeatString;
