function getDivisorCount(number) {
    const numbers = [];
    
    for(let i = 1; i <= Math.sqrt(number); i++) {
        if(number % i === 0) {
            numbers.push(i);
            numbers.push(number / i);
        }
    }
    
    return [...new Set(numbers)].length;
}

function solution(number, limit, power) {
    var answer = 0;
    const numbers = [];
    
    for(let i = 1; i <= number; i++) {
        numbers.push(getDivisorCount(i));
    }
    
    const filterdNumbers = numbers.filter(number => number <= limit);
    const limitedNumbers = numbers.filter(number => number > limit);
    
    answer += filterdNumbers.reduce((acc, cur) => acc + cur) + (limitedNumbers.length * power);
    
    return answer;
}