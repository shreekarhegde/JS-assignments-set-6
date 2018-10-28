function totalPortfolioView(array1,array2){
    outPut = {};
    var sum = 0;
    
    for(var i = 0; i < array1.length; i++){
        for(var j = 0; j < array2.length; j++){
            
            if(array1[i] == array2[j][0]){
               
                outPut[array1[i]] =  array1[i+1]*array2[j][1];
            sum = sum +  array1[i+1]*array2[j][1];
        }
        else if( array1[i] != array2[j][0] && typeof array1[i] == 'string' && i == j){ 
            outPut[array2[j][0]] = 'doesnot exist';
        }
        else if(!array1.includes(array2[j][0])){
                outPut[array2[j][0]] = 'does not exist';
        }

        }
       
    }
    outPut['total'] = sum;
    return outPut;
}
console.log(totalPortfolioView( ['YHOO', 34.4, 'GOOG', 724.03, 'AMZN', 651.23, 'AAPL', 120.44], [['AAPL', 100], ['YHOO', 200]]));
console.log(totalPortfolioView(['ABC', 10, 'XYZ', 200, 'BBB', 5],[['XYZ', 20], ['HOPE', 10]]));