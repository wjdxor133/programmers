## 문제 설명

<img width="554" alt="x만큼 간격이 있는 n개의 숫자" src="https://user-images.githubusercontent.com/47416686/118077904-0a399180-b3f0-11eb-90dc-a6283b4a7fd9.png">

### 입출력 예

<img width="554" alt="x만큼 간격이 있는 n개의 숫자 입출력 예" src="https://user-images.githubusercontent.com/47416686/118077925-1291cc80-b3f0-11eb-91ff-42ec333673f6.png">

## 내가 짠 코드

```jsx
function solution(x, n) {
  var answer = [];
  for (let i = 1; i <= n; i++) {
    answer.push(i * x);
  }
  return answer;
}
```

## 문제 풀이

- 풀이는 간단하다.
- 두 수 `x`와 `n`을 입력 받아 `for문`을 통해 \*\*\*\*1 ~ n만큼 순서대로 `push()`를 사용해 x에 곱해 새 배열에 넣어 반환한다.

## 남이 짠 코드

```jsx
function solution(x, n) {
  return Array(n)
    .fill(x)
    .map((v, i) => (i + 1) * v);
}
```

- `Array(n)`를 사용하면 [element0, element1, ..., elementN] 이런식으로 생성된다.
- 그런 다음, `fill(x)`을 사용해서 배열 안에 x으로 항목을 채운다.
- `map()`을 사용해서 순서대로 곱해 반환한다.

## ✔️ 참고

[코딩테스트 연습 - x만큼 간격이 있는 n개의 숫자](https://programmers.co.kr/learn/courses/30/lessons/12954)

[Array() 생성자 - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Array)

[Array.prototype.fill() - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/fill)
