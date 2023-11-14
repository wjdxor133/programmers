function solution(myString) {
    const L = 'l';
    const myStrings = myString.split('').map((string) => {
        return string.charCodeAt() < L.charCodeAt() ?  L : string;
    }).join('');
    
    return myStrings;
}