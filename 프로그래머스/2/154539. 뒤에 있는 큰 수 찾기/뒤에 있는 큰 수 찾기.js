function solution(numbers) {
    const answer = Array(numbers.length).fill(-1);
    const stack = [];
    
    numbers.forEach((number, index) => {
        while(stack.length > 0 && numbers[stack[stack.length - 1]] < numbers[index]) {
            const idx = stack.pop();
            answer[idx] = numbers[index];
        }
        
        // 처음에는 비교할 값이 없어서 stack에 먼저 첫 인덱스를 채운다.      
        stack.push(index);
    })
    
    return answer;
}