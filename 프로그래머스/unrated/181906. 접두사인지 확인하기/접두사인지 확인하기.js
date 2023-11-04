function solution(my_string, is_prefix) {
    const myStrings = my_string.split('').map((string, index) => my_string.substring(0, index));
    
    return myStrings.includes(is_prefix) ? 1 : 0;
}