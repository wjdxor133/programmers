function solution(n, m, section) {
    let currentPainted = 0; 
    let count = 0;
    
    for(notPainted of section) {
        if(notPainted > currentPainted) {
            currentPainted = notPainted + m -1;
            count += 1;
        } 
    }
    
    return count;
}