## 문제 설명

<img width="537" alt="H-Index" src="https://user-images.githubusercontent.com/47416686/123367742-6f6ad000-d5b5-11eb-9792-1014b046aa36.png">

### 입출력 예

<img width="537" alt="H-Index 입출력" src="https://user-images.githubusercontent.com/47416686/123367735-6da10c80-d5b5-11eb-8cf5-c2fde595a679.png">

### 입출력 예 설명

이 과학자가 발표한 논문의 수는 5편이고, 그중 3편의 논문은 3회 이상 인용되었습니다.

그리고 나머지 2편의 논문은 3회 이하 인용되었기 때문에 이 과학자의 H-Index는 3입니다.

## 문제 풀이

**접근 방식**

- 이번 문제 이해하는데 시간이 너무 오래걸렸다.

1. 어느 과학자의 논문 : [3, 0, 6, 1, 5] → ok
2. 발표한 논문의 수 : 5편 → ok
3. 그 중 3편의 논문은 3회 이상 인용 → **why..?**
4. 나머지 2편의 논문은 3회 이하 인용
5. 이 과학자의 H-Index는 3

- 여기서 핵심은 어떤 기준으로 `n회 인용(H-Index)`을 구하는 것 인가?
- [H-Index 구하는 방법](https://www.notion.so/H-Index-ef723cb96964421ca7edd53d67ea3f7a)( 🖇️ 클릭!)

**구하는 원리**

1. 먼저 내림차순 정렬을 해라.
2. f의 값이 그 위치보다 크거나 같은 곳의 마지막 위치가 H-index이다.

- 응?? f의 값이 뭔데..?
- 알아보니 `f는 논문`을 의미, `위치 값은 논문의 index값`을 의미

```jsx
// 변수로 HIndex의 값을 두어 증가시켜주거나
const 논문 =[3, 0, 6, 1, 5];
let HIndex = 0;

// 내림차순 정렬
[6, 5, 3, 1, 0]

6 > 0 -> 1
5 > 1 -> 2
3 > 2 -> 3 -> H-index의 값, 여기서 멈추기 때문에 최대 인용값
1 > 4 -> x
0 > 5 -> x
```

## 내가 짠 코드

```jsx
function solution(citations) {
  let HIndex = 0;

  // sort()를 사용한 내림차순 정렬
  citations.sort((a, b) => b - a);

  for (let i = 0; i < citations.length; i++) {
    if (citations[i] > i) {
      HIndex = i + 1;
    }
  }

  return HIndex;
}
```

## ✔️ 참고

[코딩테스트 연습 - H-Index](https://programmers.co.kr/learn/courses/30/lessons/42747)
