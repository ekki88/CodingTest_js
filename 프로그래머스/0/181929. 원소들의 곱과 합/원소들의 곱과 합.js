function solution(num_list) {
    let sum = 0;
    let product = 1;
    for (const n of num_list ) {
        sum += n
        product *= n 
    }
    return product < sum * sum ? 1:0;
}