function solution(maps) {
  const rows = maps.length;
  const cols = maps[0].length;
  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
  const result = [];

  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (maps[i][j] !== 'X' && !visited[i][j]) {
        let sum = 0;
        const queue = [[i, j]];
        visited[i][j] = true;

        while (queue.length) {
          const [x, y] = queue.shift();
          sum += Number(maps[x][y]);

          for (let d = 0; d < 4; d++) {
            const nx = x + dx[d], ny = y + dy[d];
            if (
              nx >= 0 && nx < rows && ny >= 0 && ny < cols &&
              maps[nx][ny] !== 'X' && !visited[nx][ny]
            ) {
              visited[nx][ny] = true;
              queue.push([nx, ny]);
            }
          }
        }

        result.push(sum);
      }
    }
  }

  return result.length ? result.sort((a, b) => a - b) : [-1];
}
