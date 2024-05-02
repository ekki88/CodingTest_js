function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    const denum =denom1 * numer2 + denom2 * numer1;
    const num = denom1*denom2;
    
    let minNum;
    if(denum < num) {
        minNum = denum;
    } else {
        minNum = num;
    }
    
    while(true) {
        if(denum % minNum === 0) {
            if(num % minNum === 0){
                return [denum / minNum, num / minNum];
            }
        }
        minNum = minNum -1;
    }
}