## 문제 설명

<img width="553" alt="N개의 최소공배수" src="https://user-images.githubusercontent.com/47416686/117559530-1efce900-b0c1-11eb-917f-a488bdbb471d.png">

### 입출력 예

<img width="553" alt="N개의 최소공배수 입출력 예" src="https://user-images.githubusercontent.com/47416686/117559539-2a501480-b0c1-11eb-9e63-81dd083c5e97.png">

## 내가 짠 코드

```jsx
// 최대 공약수
function gcd(a, b) {
  let r;
  while (b !== 0) {
    r = a % b;
    a = b;
    b = r;
  }
  return a;
}

// 최소 공배수
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function solution(arr) {
  let num = arr[0];
  for (let i = 1; i < arr.length; i++) {
    num = lcm(num, arr[i]);
  }

  return num;
}
```

## 문제 풀이

- 문제 풀이는 밑에 참고 항목에서 참고 했으므로, 참고 링크를 통해 이해하는 것이 훨씬 좋을 것 같다.
- 최대 공약수, 최대 공배수 알고리즘은 외우는 것이 좋을 것 같다.

## ✔️ 참고

[코딩테스트 연습 - 최솟값 만들기](https://programmers.co.kr/learn/courses/30/lessons/12941)

[[제대로 수학공부] 약수란? 공약수란? 최대공약수란?](https://m.blog.naver.com/PostView.nhn?blogId=jnanna89&logNo=221442497785&proxyReferer=https:%2F%2Fwww.google.com%2F)

[최대공약수와 최소공배수란?](https://math100.tistory.com/135)

[최소공배수와 최대공약수 알고리즘 (유클리드 호제법)](https://imkh.dev/algorithm-gcd-lcm/)
