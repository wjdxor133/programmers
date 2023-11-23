function solution(ingredient) {
    const pattern = "1231";
    let count = 0;
    let meterials = [];
    
    for(let i = 0; i < ingredient.length; i++) {
        meterials.push(ingredient[i]);
        
        if(meterials.length >= pattern.length) {
            const meterialsLength = meterials.length;
            
            if(meterials[meterialsLength-1] === 1 &&
                meterials[meterialsLength-2] === 3 &&
                meterials[meterialsLength-3] === 2 &&
                meterials[meterialsLength-4] === 1
              ) {
                meterials.pop();
                meterials.pop();
                meterials.pop();
                meterials.pop();
                count += 1;
            }
        }
    }
    
    return count;
}