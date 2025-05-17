function solution(n, w, num) {
  const boxes = Array.from({ length: n }, (_, i) => i + 1);

  const grid = [];
  for (let i = 0; i < n; i += w) {
    grid.push(boxes.slice(i, i + w));
  }

  grid.reverse();

  for (let r = 0; r < grid.length; r++) {
    const row = grid[r];
    const isZigzag = r % 2 === 0;

    if (isZigzag) {
      row.reverse();
      const padCount = w - row.length;
      if (padCount > 0) {
        grid[r] = Array(padCount).fill(0).concat(row);
      }
    } else {
      const padCount = w - row.length;
      if (padCount > 0) {
        grid[r] = row.concat(Array(padCount).fill(0));
      }
    }
  }

  let targetRow = -1, targetCol = -1;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < w; c++) {
      if (grid[r][c] === num) {
        targetRow = r;
        targetCol = c;
        break;
      }
    }
    if (targetRow !== -1) break;
  }

  let count = 1;
  for (let r = 0; r < targetRow; r++) {
    if (grid[r][targetCol] !== 0) {
      count++;
    }
  }

  return count;
}