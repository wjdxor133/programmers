

function solution(nums) {
    let count = 0;
    
    function isPrime(number) {
        if (number < 2) return false;
        
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if(number % i === 0) return false;
        }
    
        return true;
    }

    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                const sum = nums[i] + nums[j] + nums[k];
                if (isPrime(sum)) count++;
            }
        }
    }
    
    return count;
}


// 첫 번째 반복문 (i): 첫 번째 숫자를 선택

// i 변수는 배열의 첫 번째 숫자부터 뒤에서 두 번째 숫자까지 선택하게 된다.
// 이렇게 하는 이유는 세 숫자를 골라야 하기 때문입니다. 마지막 숫자는 세 번째 숫자를 고르기 위한 기회로 남겨둔다.

// 두 번째 반복문 (j): 두 번째 숫자를 선택

// j 변수는 i 다음의 숫자부터 끝에서 두 번째 숫자까지 선택한다.
// 이렇게 함으로써 중복을 피하고 첫 번째 숫자 이후의 숫자를 선택한다.

// 세 번째 반복문 (k): 세 번째 숫자를 선택

// k 변수는 j 다음의 숫자부터 배열의 마지막 숫자까지 선택한다.
// 이렇게 하면 첫 번째와 두 번째 숫자 이후의 숫자를 선택하며, 중복을 피할 수 있다.