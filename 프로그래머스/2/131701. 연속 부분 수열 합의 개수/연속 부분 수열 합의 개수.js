function solution(elements) {
  const n = elements.length;
  const arr = elements.concat(elements);
  const prefix = [0];
  
  for (let i = 0; i < arr.length; i++) {
    prefix[i + 1] = prefix[i] + arr[i];
  }

  const sums = new Set();

  for (let len = 1; len <= n; len++) {
    for (let start = 0; start < n; start++) {
      const end = start + len;
      const total = prefix[end] - prefix[start];
      sums.add(total);
    }
  }

  return sums.size;
}

/*
[예시] elements = [7, 9, 1, 1, 4]

1️⃣ 원형 처리
   arr = [7, 9, 1, 1, 4, 7, 9, 1, 1, 4]
   → 원형(끝→처음) 구간도 직선처럼 다룰 수 있게 함.

2️⃣ 누적합(prefix) 계산
   prefix[0] = 0 부터 시작해 순서대로 더함
   prefix = [0, 7, 16, 17, 18, 22, 29, 38, 39, 40, 44]
   → prefix[i]는 arr[0]부터 arr[i-1]까지의 합.

3️⃣ 구간합 계산 공식
   total = prefix[end] - prefix[start]
   → arr[start] ~ arr[end-1]까지의 합만 남김.

4️⃣ 길이별 구간합 예시
   len = 1 → [7, 9, 1, 1, 4]
   len = 2 → [16, 10, 2, 5, 11]
   len = 3 → [17, 11, 6, 12, 20]
   len = 4 → [18, 15, 13, 21, 21]
   len = 5 → [22, 22, 22, 22, 22]

5️⃣ Set에 모인 값들
   {1, 2, 4, 5, 6, 7, 9, 10, 11, 12, 13, 15, 16, 17, 18, 20, 21, 22}
   서로 다른 합 개수 = 18

✅ 결과: solution([7, 9, 1, 1, 4]) → 18
*/
