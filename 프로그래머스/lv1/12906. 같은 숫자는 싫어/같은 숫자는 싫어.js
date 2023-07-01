function solution(arr){
    const result = arr.filter((num, idx) => num !== arr[idx + 1]);
    return result;
}