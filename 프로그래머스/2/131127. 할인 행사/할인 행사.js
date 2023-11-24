function solution(want, number, discount) {
    let answer = 0;
    let dict = {};

    for (let i = 0; i < discount.length - 9; i++) {
        for (let j = 0; j < want.length; j++)
            dict[want[j]] = number[j];

        for (let j = i; j < i + 10; j++) {
            if (dict.hasOwnProperty(discount[j]))
                dict[discount[j]]--;
        }

        let maxValue = 0;
        for (let key in dict) {
            if (dict.hasOwnProperty(key) && dict[key] > maxValue)
                maxValue = dict[key];
        }

        if (maxValue === 0)
            answer++;

        dict = {};
    }

    return answer;
}