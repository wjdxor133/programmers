function solution(park, routes) {
    const moveDirections = { 
        'N': [-1, 0], // 북쪽: 위로 이동
        'S': [1, 0],  // 남쪽: 아래로 이동
        'W': [0, -1], // 서쪽: 왼쪽으로 이동
        'E': [0, 1]   // 동쪽: 오른쪽으로 이동
    };
    let start = [];
    
    const maxRowIndex = park.length - 1;
    const maxColumnIndex = park[0].length - 1;

    for (let i = 0; i < park.length; i++) {
        for (let j = 0; j < park[i].length; j++) {
            if (park[i][j] === 'S') {
                start = [i, j];
            }
        }
    }

    for (let i = 0; i < routes.length; i++) {
        const [dir, move] = routes[i].split(' ');
        let [currentRow, currentColumn] = [start[0], start[1]];
        let validMove = true;
        
        for(let j = 0; j < Number(move); j++) {
            currentRow += moveDirections[dir][0];
            currentColumn += moveDirections[dir][1];
            
            if (currentRow < 0 || currentRow > maxRowIndex || currentColumn < 0 || currentColumn > maxColumnIndex || park[currentRow][currentColumn] == 'X') {
                validMove = false;
                break;
            }
        }
        
        if(validMove) {
            start = [currentRow, currentColumn];
        }
    }

    return start;
}
