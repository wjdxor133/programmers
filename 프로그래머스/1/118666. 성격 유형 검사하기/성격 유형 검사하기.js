function findPersonalityType(menuItems) {
  let result = '';

  menuItems.forEach(item => {
    const keys = Object.keys(item);
    const key1 = keys[0];
    const key2 = keys[1];

    if (item[key1] > item[key2]) {
      result += key1;
    } else if (item[key1] === item[key2]) {
      result += key1 > key2 ? key2 : key1;
    } else {
      result += key2;
    }
  });

  return result;
}

function solution(survey, choices) {
  const type = {
    'R': 0,
    'T': 0,
    'C': 0,
    'F': 0,
    'J': 0,
    'M': 0,
    'A': 0,
    'N': 0
  };
  const selectList = [null, 3, 2, 1, 0, 1, 2, 3];

  const typeArray = [];
  let tempTypeObj = {};

  for (let i = 0; i < survey.length; i++) {
    const point = Math.floor(selectList.length / 2);
    const firstChar = survey[i][0];
    const secondChar = survey[i][1];

    if (point > choices[i]) {
      type[firstChar] += selectList[choices[i]];
    } else {
      type[secondChar] += selectList[choices[i]];
    }
  }

  Object.keys(type).forEach((key, index) => {
    tempTypeObj[key] = type[key];
    if ((index + 1) % 2 === 0) {
      typeArray.push({ ...tempTypeObj });
      tempTypeObj = {};
    }
  });

  return findPersonalityType(typeArray);
}
