function solution(numbers) {
    numbers.sort((a, b) => a - b);

    const maxValues = numbers.slice(-2).reduce((acc, val) => acc * val, 1);
    const minValues = numbers[0] * numbers[1];

    return Math.max(maxValues, minValues);
}
