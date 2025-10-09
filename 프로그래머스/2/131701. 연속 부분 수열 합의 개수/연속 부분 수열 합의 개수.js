function solution(elements) {
  const n = elements.length;
  const doubled = elements.concat(elements);
  const sums = new Set();

  for (let length = 1; length <= n; length++) {
    for (let start = 0; start < n; start++) {
      const part = doubled.slice(start, start + length);
      const total = part.reduce((a, b) => a + b, 0);
      sums.add(total);
    }
  }

  return sums.size;
}
