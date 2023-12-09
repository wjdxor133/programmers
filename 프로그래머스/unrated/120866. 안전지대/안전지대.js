function isSafe(row, col, n) {
    return row >= 0 && col >= 0 && row < n && col < n;
}

function solution(board) {
    const n = board.length;
    const moves = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1],
        [0, 1],
        [1, -1], [1, 0], [1, 1]
    ];
    
    let safeCount = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 0) {
                let isSafeCell = true;

                for (let k = 0; k < moves.length; k++) {
                    const newRow = i + moves[k][0];
                    const newCol = j + moves[k][1];

                    if (isSafe(newRow, newCol, n) && board[newRow][newCol] === 1) {
                        isSafeCell = false;
                        break;
                    }
                }

                if (isSafeCell) {
                    safeCount++;
                }
            }
        }
    }

    return safeCount;
}
