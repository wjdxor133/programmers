function solution(X, Y) {
    let common = [];
    const countX = new Array(10).fill(0);
    const countY = new Array(10).fill(0);
    
    for(x of X) {
        countX[x]++;
    }
    
    for(y of Y) {
        countY[y]++;
    }
    
    for(let i = 0; i < countX.length; i++) {
        if(countX[i] !== 0 && countY[i] !== 0) {
            common.push(String(i).repeat(Math.min(countX[i], countY[i])));
        }
    }
    
    if(common.length === 0) return "-1";
    if(common.length === 1 && parseInt(common[0], 10) === 0) return "0"
    
    return common.reverse().join('');
}