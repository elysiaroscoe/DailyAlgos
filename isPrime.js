function isPrime(num) {
    //TODO
    //we take in the number
    //we can iterate from 2 up to that number to see if it is divisible by any small numbers first, then large numbers
    if (num <= 1) {
        return false;
    }
    for (let i = 2; (i * i) <= num; i++) {
        let remainder = (num % i)
        if (remainder === 0) {
            console.log({ remainder, i })
            //if divisible, it is not prime
            return false;
        }
    }
    return true;
}