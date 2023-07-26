function solution(s) {
    var answer = 0;
    let charPoint = null;
    let correct = 0;
    let incorrect = 0;
    
    for(const char of s) {
        if(!charPoint) charPoint = char;
        char === charPoint ? correct++ : incorrect++;
        
        if(correct === incorrect) {
            answer++;
            charPoint = null
            correct = 0;
            incorrect = 0;
        }
    }
    
    return charPoint ? ++answer : answer
}