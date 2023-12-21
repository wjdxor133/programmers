function solution(arr) {
    const answer = arr.map(item => {
        if(item >= 50 && item % 2 === 0) {
            return item / 2;    
        }
        
        if(item < 50 && item % 2 !== 0) {
            return item * 2;
        } 
        
        return item;
    });
    
    return answer;
}