const stringsHelper = (str1, str2) => {
  if (str1 < str2) return 1;
  if (str1 > str2) return -1;
  return 0;
};

const solvedByHelper = (str) => {
  const arr = str.split(' of ');
  return Number(arr[0]) / Number(arr[1]);
};

const difficulty = (arr, incr) => {
  return arr.sort((a, b) =>
    incr
      ? stringsHelper(a.difficulty, b.difficulty)
      : stringsHelper(b.difficulty, a.difficulty));
};

const stars = (arr, incr) => {
  return arr.sort((a, b) => incr ? b.stars - a.stars : a.stars - b.stars);
};

const status = (arr, incr) => {
  return arr.sort((a, b) =>
    incr
      ? stringsHelper(a.status, b.status)
      : stringsHelper(b.status, a.status));
};

const satisfaction = (arr, incr) => {
  return arr.sort((a, b) =>
    incr
      ? stringsHelper(a.satisfaction, b.satisfaction)
      : stringsHelper(b.satisfaction, a.satisfaction));
};

const solvedBy = (arr, incr) => {
  return arr.sort((a, b) => {
    const computedA = solvedByHelper(a.solvedBy);
    const computedB = solvedByHelper(b.solvedBy);
    return incr ? computedB - computedA : computedA - computedB;
  });
};

export default {
  difficulty,
  stars,
  status,
  satisfaction,
  solvedBy
};

