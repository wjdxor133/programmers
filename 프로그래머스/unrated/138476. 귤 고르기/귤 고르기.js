function solution(k, tangerine) {
    var answer = 0;
    let sum = 0;
    
   const tangerineCount = tangerine.reduce((acc, cur) => {
       acc[cur] = 0;
       return acc;
   }, {});
    
    for(const item of tangerine) {
        tangerineCount[item] += 1;
    }
    
    const counts = Object.values(tangerineCount).sort((a, b) => b - a);
    
    for(let i = 0; i < counts.length; i++) {
        sum += counts[i];
        answer++;
        
        if(sum >= k) break;
    }
    
    return answer;
}