function solution(want, number, discount) {
    let count = 0;

    for (let i = 0; i < discount.length - 9; i += 1) {
        const list = discount.slice(i, i + 10);

        for (j = 0; j < want.length; j += 1) {
            if (list.filter(v => v === want[j]).length !== number[j]) {
                break;
            }
        }

        if (j === want.length) {
            count += 1;
        }
     }
    
    return count;
}