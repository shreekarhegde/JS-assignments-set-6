function fill(firstLetter,lastLetter,n){
    result = [];
        var alphabets = 'abcdefghijklmnopqrstuvwxyz';
       // console.log(alphabets.indexOf(firstLetter));
        //console.log(alphabets.charAt(alphabets.indexOf(firstLetter)));
        for(var i = alphabets.indexOf(firstLetter); i <= alphabets.indexOf(lastLetter)+1; i=i+n){
                result.push(alphabets.charAt(i));
        }
return result;
}
console.log(fill('a','x',2));