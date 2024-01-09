function solution(num_list) {
    let even = 0;
    let odd = 0;
    
    num_list.forEach((num, index) => {
        if((index + 1) % 2 === 0) {
            even += num
        } else {
            odd += num;
        }
    });

    return Math.max(even, odd);
}