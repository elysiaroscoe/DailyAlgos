function listSquared(m: number, n: number) {
    //find all integers in the range of m-n where sum of squared divisors is a square
    //accessing each value in the range
    let resultArray: Array<Array<number>> = [];
    for(let i=m; i<n; i++){
        //i is the value between m-n
        //find divisors of i
        let iDivisorSum: number = 0;
        for(let j=i; j>0; j--){
            //iterate from the value down to 1 and find divisiors
            //if i/j
            if(!isDecimal(i/j)){
                //if isDecimal is false it is a whole number
                //square each divisor and add to sum
                iDivisorSum += (j*j)
            }
        }
        // console.log({iDivisorSum})
        // console.log(isSquare(iDivisorSum))
        //check to see if sum is a square
        if(isSquare(iDivisorSum)){
            console.log("the divisor is square")
            //push pair of [i, sum]
            resultArray.push([i, iDivisorSum]);
        }
    }
    console.log({resultArray})
    return resultArray;
}

function isDecimal(n: number){
    //if the division - converting the division to a whole number is not equal, it is a decimal
    let result = n - Math.floor(n) !== 0;
    if (result) {
        return true;
    } 
    else {
        return false;
    }
}

function isSquare(n: number) {
    let squareRoot: number = Math.sqrt(n)
    let result: boolean = isDecimal(squareRoot);
    if(!result){
        return true;
    } else {
        return false;
    }
}