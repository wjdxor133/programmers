## 문제 설명

<img width="543" alt="문자열 내 p와 y의 개수" src="https://user-images.githubusercontent.com/47416686/115983783-56a66400-a5de-11eb-9b34-8bbb5f057eb6.png">

### 입출력 예 설명

**입출력 예 #1**

'p'의 개수 2개, 'y'의 개수 2개로 같으므로 true를 return 합니다.

**입출력 예 #2**

'p'의 개수 1개, 'y'의 개수 2개로 다르므로 false를 return 합니다.

## 내가 짠 코드

```jsx
function solution(s) {
  let pCnt = 0;
  let yCnt = 0;
  s.split("").map((char) => {
    if (char.toLowerCase() === "p") {
      pCnt += 1;
    } else if (char.toLowerCase() === "y") {
      yCnt += 1;
    }
  });

  return (pCnt === 0 && yCnt === 0) || pCnt === yCnt;
}
```

## 문제 풀이

- 문자열 안에서 `"p"` , `"y"` 의 개수가 일치하거나 `"p"` , `"y"` 가 없으면 **true**를 반환한다.
- `"p"` , `"y"` 의 개수를 담을 변수 `pCnt`와 `yCnt`를 선언한다.
- 그 다음 문자열을 `split()`를 사용해 배열로 만든다.
- `map()` 을 통해서 `"p"` , `"y"` 를 소문자 기준으로 조건을 주고 일치했을 경우 `pCnt`와 `yCnt`에 각각 +1를 한다.
- 이제 최종적으로 `pCnt`와 `yCnt`의 수가 값은 **true** **반환**하고,
- `"p"` , `"y"` 가 없을 경우 **true를 반환해야 하기 때문에** `pCnt`와 `yCnt`의 수가 각각 0인지 확인하고 **true를 반환**한다.

## 남이 짠 코드

```jsx
// code 1
function numPY(s) {
  return (
    s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length
  );
}

// code 2
function numPY(s) {
  return s.match(/p/gi).length == s.match(/y/gi).length;
}
```

## ✔️ 참고

[코딩테스트 연습 - 문자열 내 p와 y의 개수](https://programmers.co.kr/learn/courses/30/lessons/12916)
