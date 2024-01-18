// 명령어 3가지를 공백을 기준으로 나누고, 각각 기준에 맞게 조건을 설정한다
// 숫자면 추가, 1이면 최댓값 삭제, -1이면 최솟값 삭제
// 만약 비어있으면 [0, 0]을 반환
// 삭제하는 연산에서 최댓값 / 최솟값이 둘 이상인 경우 하나만 제거

function solution(operations) {
    let queue = [];

    operations.forEach((operation) => {
        const [char, number] = operation.split(' ');
        const intNumber = Number(number);

        if (char === 'I') {
            queue.push(intNumber);
        }

        if (char === 'D' && intNumber === 1) {
            if (queue.length > 0) {
                const max = Math.max(...queue);
                queue = queue.filter((num) => num !== max);
            }
        }

        if (char === 'D' && intNumber === -1) {
            if (queue.length > 0) {
                const min = Math.min(...queue);
                queue = queue.filter((num) => num !== min);
            }
        }
    });

    const result = queue.length === 0 ? [0, 0] : [Math.max(...queue), Math.min(...queue)];

    return result;
}
