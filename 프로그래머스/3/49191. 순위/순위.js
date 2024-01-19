function solution(n, results) {
    let answer = n;
    let graph = Array.from({ length: n }, () => Array(n).fill(null));

    results.forEach(([n1, n2]) => {
        graph[n1 - 1][n2 - 1] = 1;
        graph[n2 - 1][n1 - 1] = -1;
    });

    for (let i = 0; i < n; i++) {
        graph[i][i] = 0;
    }

    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (graph[i][k] === 1 && graph[k][j] === 1) {
                    graph[i][j] = 1;
                    graph[j][i] = -1;
                }
            }
        }
    }

    graph.forEach((row) => {
        if (row.includes(null)) {
            answer--;
        }
    });

    return answer;
}
