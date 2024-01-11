function solution(num_list) {
    let sum = 0;
    let multiply = 1;
    
    num_list.forEach((num) => {
        if(num_list.length >= 11) {
            sum += num;
        } else {
            multiply *= num;
        }
    })
    
    return num_list.length >= 11 ? sum : multiply;
}