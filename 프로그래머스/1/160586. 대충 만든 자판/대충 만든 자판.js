function solution(keymap, targets) {
    var answer = [];
    
    for(i = 0; i < targets.length; i++) {
        let index = 0;
        
        for(j = 0; j < targets[i].length; j++) {
            const char = targets[i][j];
            const total = keymap.map((item) => {
                return item.indexOf(char) === -1 ? Infinity : item.indexOf(char) + 1;
            });
            const minIndex = Math.min(...total);
            
            if(minIndex === Infinity) {
                index = -1;
                break;
            }
            index += minIndex;
        }
        answer.push(index);
    }
    
    return answer;
}