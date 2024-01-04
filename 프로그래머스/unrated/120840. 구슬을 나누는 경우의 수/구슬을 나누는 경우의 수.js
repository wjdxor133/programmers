function solution(balls, share) {
    let answer = 0;
    
    function getCombinations(start, selected) {
        if (selected.length === share) {
            answer++;
            return;
        }
        
        for (let i = start; i < balls; i++) {
            selected.push(i);
            getCombinations(i + 1, selected);
            selected.pop();
        }
    }
    
    getCombinations(0, []);
    
    return answer;
}