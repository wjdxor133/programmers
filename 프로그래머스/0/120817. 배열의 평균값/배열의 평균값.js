function solution(numbers) {
    const sum = numbers.reduce((acc, num) => {
        return acc + num;
    }, 0)
    
    return (sum / numbers.length).toFixed(1);
}