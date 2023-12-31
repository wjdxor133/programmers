// 1. 동, 서, 남, 북에 따른 좌표 생성
// 2. park_x, park_y 최대 좌표 구하기
// 3. 시작점 위치 구하기
// 4. routes에 따른 거리 구하기
// 5. 조건이 충족할 때만 위치 업데이트 

function solution(park, routes) {
    const direction = { 
        'N': [-1, 0],
        'S': [1, 0],
        'W': [0, -1],
        'E': [0, 1]
    };
    let start = [];
    
    const park_x_xax = park.length -1;
    const park_y_max = park[0].length -1;

    for (let i = 0; i < park.length; i++) {
        for (let j = 0; j < park[i].length; j++) {
            if (park[i][j] === 'S') {
                start = [i, j];
            }
        }
    }

    for (let i = 0; i < routes.length; i++) {
        const [dir, move] = routes[i].split(' ');
        let [nx, ny] = [start[0], start[1]];
        let validMove = true;
        
        for(let j = 0; j < Number(move); j++) {
            nx += direction[dir][0];
            ny += direction[dir][1];
            
            if (nx < 0 || nx > park_x_xax || ny < 0 || ny > park_y_max || park[nx][ny] == 'X') {
                validMove = false;
                break;
            }
        }
        
        if(validMove) {
            start = [nx, ny];
        }

    }

    return start;
}
