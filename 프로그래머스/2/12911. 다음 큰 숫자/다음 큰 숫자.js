function getCountOnes(n) {
    return n.toString(2).split("").filter((num) => num === "1").length;
}

function solution(n) {
    const target = getCountOnes(n);
    let x = n + 1;
    
    while(true) {
        if(getCountOnes(x) === target) {
            return x;
        }
        
        x += 1;
    }
}