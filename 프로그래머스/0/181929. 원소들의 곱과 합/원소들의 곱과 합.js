function solution(num_list) {
    const multiplication = num_list.reduce((acc, num) => {
        acc *= num;
        return acc;
    }, 1)
    
    const sum = num_list.reduce((acc, num) => {
        acc += num;
        return acc;
    }, 0)

    return multiplication < sum * sum ? 1 : 0;
}