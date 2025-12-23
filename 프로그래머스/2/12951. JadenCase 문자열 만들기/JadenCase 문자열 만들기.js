function solution(s) {
  return s
    .toLowerCase()
    .split(' ')
    .map(word => {
      if (word === '') return '';
      return word[0].toUpperCase() + word.slice(1);
    })
    .join(' ');
}