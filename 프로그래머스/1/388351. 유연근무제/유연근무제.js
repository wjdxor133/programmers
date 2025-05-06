function solution(schedules, timelogs, startday) {
  let answer = 0;

  for (let i = 0; i < timelogs.length; i++) {
    let passed = true;

    for (let j = 0; j < 7; j++) {
      const day = (startday + j) % 7;
      if (day === 0 || day === 6) continue; // 일, 토 제외

      const actual = timelogs[i][j];
      const approved = schedules.map(getApprovedTime)[i];

      if (actual > approved) {
        passed = false;
        break;
      }
    }

    if (passed) answer += 1;
  }

  return answer;
}


function getApprovedTime(hhmm) {
  const hour = Math.floor(hhmm / 100);
  const minute = hhmm % 100;

  // 1. 전체 분으로 바꾸고 10분 더하기
  const totalMinutes = hour * 60 + minute + 10;

  // 2. 다시 시/분으로 분리
  const newHour = Math.floor(totalMinutes / 60);
  const newMinute = totalMinutes % 60;

  return newHour * 100 + newMinute;
}

