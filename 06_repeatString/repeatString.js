const repeatString = function(str,num) {
    if(num<0) return "ERROR";
    let string="";
    for(let n=0;n<num;n++){
        string+=str;
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
