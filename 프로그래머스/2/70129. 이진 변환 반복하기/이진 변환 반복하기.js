function solution(s) {
    const answer = [0, 0];
    
    while(s !== "1") {
        answer[0] += 1;
        
        let oldLen = s.length;
        
        s = s.split("0").join("");
        
        let newLen = s.length;
        
        answer[1] += oldLen - newLen;
        s = newLen.toString(2);
    }
    
    return answer
}

