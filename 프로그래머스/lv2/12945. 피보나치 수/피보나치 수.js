function solution(n) {
    const MAX = 1234567;
    const arr = new Array(n).fill(0);
    
    arr[1] = 1;
    // arr[2] = 1;
    
    for(let i = 2; i <= n; i++) {
        arr[i] = (arr[i - 1] + arr[i - 2]) % MAX;
    }
    
    return arr[n];
}