function solution(num_list, n) {
    var answer = num_list.filter((_, idx) => idx >= n - 1);
    
    return answer;
}