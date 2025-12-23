function solution(A,B){
  // 정렬하는 이유는 곱의 합을 최소로 만들려면 “큰 값은 작은 값과 곱하고, 작은 값은 큰 값과 곱해야” 하기 때문이야.
  A.sort((a, b) => a - b);      // 오름차순
  B.sort((a, b) => b - a);      // 내림차순

  let sum = 0;
  for (let i = 0; i < A.length; i++) {
    sum += A[i] * B[i];
  }
    
  return sum;
}