function solution(babbling) {
    var answer = 0;
    const WORDS = ["aya", "ye", "woo", "ma"];
    
    for(let item of babbling) {
        for(let i = 0; i < WORDS.length; i++) {
            item = item.split(WORDS[i]).join(' ');
            if(!item.trim()) break;
        }
        
        if(item.trim().length <= 0) answer++;
    }
    
    return answer;
}