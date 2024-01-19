function solution(n, results) {
    // 정확한 순위를 매길 수 있는 선수들의 초기값을 n으로 설정
    let answer = n;

    // 각 선수 간의 승패를 나타내는 그래프 초기화
    let graph = Array.from({ length: n }, () => Array(n).fill(null));

    // 주어진 경기 결과를 바탕으로 그래프 채우기
    results.forEach(([n1, n2]) => {
        graph[n1 - 1][n2 - 1] = 1;   // n1 선수가 n2 선수를 이겼을 때는 1로 표시
        graph[n2 - 1][n1 - 1] = -1;  // n2 선수가 n1 선수를 이겼을 때는 -1로 표시
    });

    // 같은 선수끼리는 0으로 초기화
    for (let i = 0; i < n; i++) {
        graph[i][i] = 0;
    }

    // 플로이드-와샬 알고리즘을 사용하여 모든 선수 쌍 간의 이긴 상대방 관계를 갱신합니다.  
    // 예시)
    // 1번 선수가 2번을 이겼다.
    // 2번 선수가 5번을 이겼다.
    // 그러면, 1번 선수는 5번을 이길 수 있을 것이다.
    
    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                // i에서 k를 거쳐 j로 가는 경로가 있으면 갱신합니다.
                // 이때, 1은 이기는 관계, -1은 지는 관계를 나타냅니다.
                
                // 예를 들어, 1번 선수가 2번 선수 이김 && 2번 선수가 5번 선수 이겼을 때
                if (graph[i][k] === 1 && graph[k][j] === 1) {
                    // 그럼, 1번 선수 또한 5번 선수를 이김
                    graph[i][j] = 1;
                    graph[j][i] = -1;
                }
            }
        }
    }


    // 순위를 정확하게 매길 수 있는 경우를 확인하여 카운트
    graph.forEach((row) => {
        if (row.includes(null)) {
            answer--;
        }
    });

    // 정확한 순위를 매길 수 있는 선수들의 수 반환
    return answer;
}
