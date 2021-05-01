## 문제 설명

<img width="540" alt="JadenCase 문자열 만들기" src="https://user-images.githubusercontent.com/47416686/116769347-69091d80-aa76-11eb-8690-8758a066d96c.png">

## 내가 짠 코드

```jsx
function solution(s) {
  const strArr = s.split(" ");
  const newArr = [];
  strArr.map((str) =>
    newArr.push(str.charAt(0).toUpperCase() + str.toLowerCase().slice(1))
  );
  return newArr.join(" ");
}
```

## 문제 풀이

- 공백이 들어간 문자열을 `split()`을 통해 공백을 기준으로 나눠 문자열 배열을 만든다.
- 앞 글자만 대문자로 바꾼 문자열들을 담은 새 배열도 선언한다.
- 공백 기준으로 나눠진 문자열 배열들을 `map()`을 통해 모든 항목들을 순회한다.
- 순서대로 문자열을 꺼내서 `charAt()`을 통해서 맨 앞의 문자를 추출한다.
- 그러고 나서 `toUpperCase()`를 통해서 대문자로 변환한다.
- 그리고 `toLowerCase()`를 사용해 원래 문자들을 모두 소문자로 바꾸고 `slice()`로 맨 앞에 문자를 삭제한다.
- 앞 글자만 대문자로 바꾼 문자와 소문자로 변환 후 앞 문자를 삭제한 문자열을 합쳐서 새 배열에 넣는다.
- 이제 변환된 배열들을 `join(' ')`을 사용해서 사이에 공백을 넣어 문자열을 반환한다.

## 남이 짠 코드

```jsx
function solution(s) {
  return s
    .split(" ")
    .map((v) => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase())
    .join(" ");
}
```

## ✔️ 참고

[코딩테스트 연습 - JadenCase 문자열 만들기](https://programmers.co.kr/learn/courses/30/lessons/12951)

[[JavaScript] 대소문자 변환 방법 (Upper, Lower)](https://sesok808.tistory.com/602)

[[Array 객체] 배열 합치기 : join()](https://heannim-world.tistory.com/8)
