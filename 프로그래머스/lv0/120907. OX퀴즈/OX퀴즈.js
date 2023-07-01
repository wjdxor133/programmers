function solution(quiz) {
    var answer = [];
    for(item of quiz) {
        const formula = item.split('=');
        const left =  formula[0].trim().split(' ');
        const right = formula[1];
        
        if(left.includes('-')) {
            answer.push(Number(left[0]) - Number(left[2]) === Number(right) ? 'O' : 'X');
        } else {
            answer.push(Number(left[0]) + Number(left[2]) === Number(right) ? 'O' : 'X');   
        }
        
    }
    return answer;
}