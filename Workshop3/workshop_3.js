// Area of a Triangle
function trianglearea(base,height){
    return (base*height)/2;
}
console.log(trianglearea(4,5))

// Return something to Me!
function giveMeSomething(words){
    return "something" +" "+ words
}
console.log(giveMeSomething("Bob Jane"))

// Bsketball Ponts
function basketball(two,three){
    return(two*2+three*3)
}
console.log(basketball(2,4))

//Less Than 100?
function lesstThan100(a,b){
    if(a+b<100){
    return true
}
else{
    return false
}
}
console.log(lesstThan100(50,15))

// Add up the Numbers from a single Number
function addUp(n){
    var sum=0; 
    for(i=0; i<n+1; i++){
        sum+=i
    }
    return sum
}
console.log(addUp(8))

// Oddish vs, Evenish
function oddishOrEvenish(n){
    var sum=0;
    while(n!=0){
        r=n%10;
        console.log(r)
        sum+r;
        n=Math.floor(n/10);
    
    }
    if (sum%2==0){
        console.log("Evenish")

    }
    else{
        console.log("Oddish")

    }

}
oddishOrEvenish(35)

// Any Prime Number in Range 
function primeNumber(n1,n2){
    for (var i=n1; i<=n2; i++){
        var prime = 0;
        for (var j=2; j<i; j++){
            if (i % j == 0){
                prime = 1;
                break;
            }
        }
        if (i > 1 && prime == 0){
            console.log(8)
        }

    }
}
primeNumber(10,20)

// Left Shift by prowers of two
function leftshif(a,b){
    var power=1;
    i=1;
    c=2;
    while(i<=b){
        power = power *c
        i+=1

    }
    result=a*power
    console.log(result)
}
leftshif(-2,6)

// convert a Number to Base-2
function binary(a){
    let decimal = a;
    var bin=(Number(decimal).toString(2));
    if (decimal<1024){
        console.log(bin);
        }
}    
    binary(10)

