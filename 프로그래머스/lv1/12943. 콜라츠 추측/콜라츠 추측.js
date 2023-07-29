function solution(num) {
    let cnt = 0;
    while(num !== 1) {
        num % 2 === 0 ? num = num / 2 : num = (num * 3) + 1;
        cnt += 1;
        if(cnt >= 500) {
            cnt = -1;
            break;
        }
    }
    return cnt;
}