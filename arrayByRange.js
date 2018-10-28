var array = {
    generate: function(a,b){
        result = [];
        for(var i = a ; i <= b; i++)
        {
            result.push(i);
         }
    return result;
}
}

console.log(array.generate(4,7));