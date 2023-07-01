function solution(quiz) {
    var answer = [];
    for(item of quiz) {
        const [left, right] = item.split('=');
        answer.push(eval(left) === Number(right) ? 'O' : 'X');
    }
    return answer;
}