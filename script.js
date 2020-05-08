function fibonacci(n){
    if(n==1){
        n+1 
    }else{
        n=(n-2) + (n-1) ;
    }
    return n
}
console.log(fibonacci(5))
