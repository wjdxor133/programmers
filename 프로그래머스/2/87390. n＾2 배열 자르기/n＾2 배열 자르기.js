function solution(n, left, right) {
    const answerList = [];

    //  숫자를 넣을 때, 해당 숫자의 위치가 2차원 배열에서의 좌표 값으로 표현
    for (let i = left; i <= right; i++) {
        
        // x는 열(column), y는 행(row)
        const x = i % n;
        const y = Math.floor(i / n);
        
        // 각 숫자가 차지하는 영역은 대각선으로 채워지게 됩니다. 
        // 예를 들어, 1은 (0, 0)에 위치하고, 2는 (1, 1)에 위치하며, 3은 (2, 2)에 위치한다.
        // 각 숫자가 차지하는 영역은 대각선으로 채워지게 되기 때문에 더 큰 값을 선택하여 num에 할당하여야 한다.
        // 더 큰 값을 선택하는 이유는, 대각선 상에 있지 않은 경우에는 x와 y 중 큰 값을 선택하는 것이 대각선 방향으로 숫자가 채워지는 규칙을 유지하기 위함
        const num = Math.max(x, y)

        // 배열의 인덱스가 0부터 시작하기 때문에 + 1 해준다.
        answerList.push(num + 1);
    }

    return answerList;
}
