

function solution(k, dungeons) {
    var answer = -1;
    const visited = Array.from({ length: dungeons.length }, () => false);
    
    function DFS(현재_피로도, 던전_순서) {
        for(let i = 0; i < dungeons.length; i++) {
            const 최소_피로도 = dungeons[i][0];
            const 소모_피로도 = dungeons[i][1];
            
            if(!visited[i] && (현재_피로도 >= 최소_피로도)) {
                visited[i] = true;
                DFS(현재_피로도 - 소모_피로도, 던전_순서 + 1);
                visited[i] = false;
            }
        }
        answer = Math.max(answer, 던전_순서);
    }
    
    DFS(k, 0);
    
    return answer;
}