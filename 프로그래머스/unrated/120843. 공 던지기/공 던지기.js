function solution(numbers, k) {
    const people = numbers.length;
    
    return numbers[((k - 1) * 2) % people]
}