function solution(num, total) {
    const start = Math.floor(total / num) - Math.floor((num - 1) / 2);
    const result = [];

    for (let i = 0; i < num; i++) {
        result.push(start + i);
    }

    return result;
}