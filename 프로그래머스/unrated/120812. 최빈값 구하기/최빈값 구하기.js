// 1. 슷자 객체를 만든다.
// 2. 가장 자주 나오는 수를 찾고, 배열에 담는다.
// 3. 최빈값이 여러개면 -1을 반환하고, 하나면 해당 최빈값을 반환한다.
function solution(array) {
    const numberCount = array.reduce((count, number) => {
        count[number] = (count[number] || 0) + 1;
        return count;
    }, {});

    const maxCount = Math.max(...Object.values(numberCount));
    const modes = Object.entries(numberCount)
        .filter(([_, count]) => count === maxCount)
        .map(([number]) => Number(number));

    return modes.length > 1 ? -1 : modes[0];
}
