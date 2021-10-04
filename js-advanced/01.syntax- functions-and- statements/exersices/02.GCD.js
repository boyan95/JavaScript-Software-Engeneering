function gcd(a, b){
    let divisors = []
    for(i = 1; i <= Math.min(a,b); i++){
        if(a % i === 0 && b % i === 0){
            divisors.push(i)
        }
    }
    console.log(Math.max(...divisors));
}
gcd(15, 5)
gcd(2154, 458)