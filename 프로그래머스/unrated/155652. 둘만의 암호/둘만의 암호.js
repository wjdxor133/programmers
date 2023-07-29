function solution(s, skip, index) {
    var answer = '';
    
    const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));
    const skipAlphabet = alphabet.filter((ch) => !skip.includes(ch));
    
    for(const ch of s) {
        const order = skipAlphabet.indexOf(ch) + index;
        answer += skipAlphabet[order % skipAlphabet.length];
    }
    
    return answer;
}