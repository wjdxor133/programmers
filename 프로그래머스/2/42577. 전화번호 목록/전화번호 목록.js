function solution(phone_book) {
    const set = new Set(phone_book.sort((a, b) => a.length - b.length));

    for (const number of phone_book) {
        for (let i = 1; i < number.length; i++) {
            if (set.has(number.substring(0, i))) {
                return false;
            }
        }
    }

    return true;
}
