function solution(maps) {
    const ROW_LEN = maps.length;
    const COL_LEN = maps[0].length;
    
    const DIRECTION = 4;
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];
    
    const visited = Array.from(Array(ROW_LEN), () => Array(COL_LEN).fill(false));
    
    const start = [0, 0];
    const end = [ROW_LEN - 1, COL_LEN - 1];
    
    const queue = [];
    queue.push({ x: start[0], y: start[1], distance: 1});
    visited[start[0]][start[1]] = true;
    
    while(queue.length > 0) {
        const { x, y, distance } = queue.shift();
        
        if(end[0] === x && end[1] === y) {
            return distance;
        }
        
        for(let i = 0; i < DIRECTION; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            
            if(nx >= 0 && nx < ROW_LEN 
               && ny >= 0 && ny < COL_LEN 
               && maps[nx][ny] === 1 && !visited[nx][ny]) {
                queue.push({ x: nx, y: ny, distance: distance + 1 });
                visited[nx][ny] = true;
            }   
        }        
    }
    
    return -1;
}