function solution(n) {
  if (n % 2 === 1) { // 홀수인 경우
    let sum = 0;
    for (let i = 1; i <= n; i += 2) {
      sum += i;
    }
    return sum;
  } else { // 짝수인 경우
    let sumOfSquares = 0;
    for (let i = 2; i <= n; i += 2) {
      sumOfSquares += i * i;
    }
    return sumOfSquares;
  }
}