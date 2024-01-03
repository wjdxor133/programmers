// 약관 종류 유효기간 확인
// 개인정보 수집 일자와 약관 종류 확인
// today(오늘 날짜 기준으로) -> 약관 종류의 유효기간 + 개인정보 수집일자 -> 모두 일자로 바꾸는건 어떨까??
// 유효기간을 넘어가면 파기, 아니면 보관

const MAX_MONTH = 12;
const MAX_DAYS = 28;

function getDateToDays(date) {
    const [year, month, day] = date.split('.');
    const yearToDays = Number(year) * MAX_MONTH * MAX_DAYS;
    const monthToDays = Number(month) * MAX_DAYS;
    const days = Number(day);
    
    return yearToDays + monthToDays + days;
}

function solution(today, terms, privacies) {
    var answer = [];
    const todayDays = getDateToDays(today);
    const termsObj = terms.reduce((obj, item) => {
        const [type, month] = item.split(' ');
        obj[type] = Number(month) * MAX_DAYS;
        return obj;
    }, {})
    
    privacies.forEach((privacy, index) => {
        const [date, type] = privacy.split(' ');
        const expirationDate = getDateToDays(date) + termsObj[type];
        
        if(todayDays >= expirationDate) {
            answer.push(index + 1);
        }
    })
    
    return answer;
}