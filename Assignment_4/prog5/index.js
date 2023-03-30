function maax(a,b,c){
    let max=a;
    if(b>max){
        max=b;
    }
    if(c>max){
        max=c;
    }
    return max;
}

console.log(maax(9,8,7));