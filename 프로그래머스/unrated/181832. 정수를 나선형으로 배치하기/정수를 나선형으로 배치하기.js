function solution(n) {
    const answer = Array.from({ length: n }, () => []);
    
    let increase = 1;
    let top = 0;
    let left = 0;
    let right = n - 1;
    let bottom = n - 1;
    
    while(left <= right && top <= bottom) {
        for(let start = left; start <= right; start++) {
            answer[top][start] = increase++;
        }
        top++;
        
        for(let start = top; start <= bottom; start++) {
            answer[start][right] = increase++;
        }
        right--
        
        for(let start = right; start >= left; start--) {
            answer[bottom][start] = increase++;
        }
        bottom--;
        
        for(let start = bottom; start >= top; start--) {
            answer[start][left] = increase++;
        }
        left++;
    }
    
    return answer;
}