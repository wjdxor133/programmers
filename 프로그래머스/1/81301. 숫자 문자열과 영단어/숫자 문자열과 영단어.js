function solution(s) {
    const numberStringMap = {
        "zero": 0,
        "one": 1,
        "two": 2,
        "three": 3,
        "four": 4,
        "five": 5,
        "six": 6,
        "seven": 7,
        "eight": 8,
        "nine": 9
    };
    
    const numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

    for(let i = 0; i < numbers.length; i++) {
        if(Number(s)) break;
        
        if(s.includes(numbers[i])) {
            const reg = new RegExp(numbers[i], "g");
            s = s.replace(reg, numberStringMap[numbers[i]]);
        }
    }

    return Number(s);
}