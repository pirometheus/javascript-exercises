const sumAll = function(int1, int2) {
    let sum=0;
    if(int1<0 || int2<0){
        return "ERROR";
    } else if (Number.isInteger(int1 || int2)==false){
        return "ERROR";
    } else if ((typeof(int2) || typeof(int1)) != "number"){
        return "ERROR";
    } else if (int1<int2){
        for (i=int1; i<=int2;i++){
            sum+= i;
        }
    } else {
        for (i=int2; i<=int1;i++){
            sum+= i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
