// 각 차 별로 주차 요금 계산
// 차량 번호가 작은 자동차부터 주차 요금을 배열에 담아서 반환
function convertTimeToMinutes(time) {
  const timeArray = time.split(':');
  
  const hours = parseInt(timeArray[0], 10);
  const minutes = parseInt(timeArray[1], 10);
  
  const totalMinutes = hours * 60 + minutes;
  return totalMinutes;
}

function solution(fees, records) {
    const [baseTime, baseFee, unitTime, unitFee] = fees;
    const recordObj = records.reduce((obj, record) => {
        const [time, carNumber, isParking] = record.split(' ');
        
        if(!obj[carNumber]) {
            obj[carNumber] = {
                "IN" : 0,
                "OUT" : 0,
                "PARKING_TIME" : 0,
                "PARKING_FEE" : 0
            };
        }
        
        return obj;
    }, {});    
    
    records.forEach((record) => {
        const [time, carNumber, isParking] = record.split(' ');
        
        if (isParking === 'IN') {
            const inTime = convertTimeToMinutes(time);
            recordObj[carNumber].IN = inTime
        }
        
        if (isParking === 'OUT') {
            const inTime = recordObj[carNumber].IN;
            const outTime = convertTimeToMinutes(time);
            const parkingTime = outTime - inTime;
            recordObj[carNumber].PARKING_TIME += parkingTime;
            recordObj[carNumber].OUT = outTime
            recordObj[carNumber].IN = 0;            
        }
    })
    
    for (const carNumber in recordObj) {
        const inTime = recordObj[carNumber].IN;
        const outTime = recordObj[carNumber].OUT;
        
        if(inTime !== 0) {
            recordObj[carNumber].PARKING_TIME += convertTimeToMinutes('23:59') - inTime;
        } else if (inTime === 0 && outTime === 0) {
            recordObj[carNumber].PARKING_TIME += convertTimeToMinutes('23:59') - inTime;
        }
        
        const { PARKING_TIME } = recordObj[carNumber];
        let parkingFee = 0;
        
        if(PARKING_TIME > baseTime) {
            parkingFee = baseFee + Math.ceil((PARKING_TIME - baseTime) / unitTime) * unitFee;        
        } else {
            parkingFee = baseFee;
        }
        
        recordObj[carNumber].PARKING_FEE = parkingFee; 
    }
    
    const sortedKeys = Object.keys(recordObj).map((carNumber) => carNumber).sort((a, b) => a - b);
    const parkingFees = sortedKeys.map(key => recordObj[key].PARKING_FEE);
    
    return parkingFees;
}