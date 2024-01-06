function solution(str1, str2) {
    const result = str2.split(str1).length > 1 ? 1 : 0;
    
    return result;
}