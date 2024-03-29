function solution(num, total) {
    const start = Math.floor(total / num) - Math.floor((num - 1) / 2);
    const result = [];

    for (let i = 0; i < num; i++) {
        result.push(start + i);
    }

    return result;
}


// num 개의 연속된 숫자를 만들어야 하고, 그 합이 total이 되어야 합니다. 그렇다면 우리는 total을 num으로 나눈 몫을 시작으로 연속된 숫자들을 만들어낼 수 있습니다.

// 여기서 total을 num으로 나눈 몫은 연속된 숫자의 평균 값이 됩니다. 그런데 이 값은 정수일 필요는 없습니다. 그렇기 때문에 이 평균 값 주변에 있는 숫자들 중 하나를 선택하여 연속된 숫자를 만들어냅니다.

// 연속된 숫자를 만들 때 중요한 점은 그 숫자들의 평균 값 주변에 있는 값들을 사용하여 연속된 수열을 만들어내는 것입니다. 이것이 연속된 숫자의 시작을 정하는데 사용된 원리입니다.

// 그리고 중간값을 빼는 부분에서는 num이 홀수인 경우는 직접적으로 중간 값이 존재하지만, num이 짝수인 경우에는 중간 값이 없기 때문에 두 개의 중간 값 중 작은 값을 선택하여 연속된 숫자를 만들어냈습니다.

// 이렇게 하면 시작 숫자를 적절하게 설정하여 연속된 숫자를 만들어낼 수 있습니다.
