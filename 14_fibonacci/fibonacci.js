const fibonacci = function(inp) {
    if(inp<0) return "OOPS";
    else if(inp==1) return 1;
    else if(inp==0) return 0;
    else return fibonacci(Number(inp)-1)+fibonacci(Number(inp)-2);
};

// Do not edit below this line
module.exports = fibonacci;
