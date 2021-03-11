
exports.min = function min (arr) {
  if (arr === undefined || arr.length === 0) {
    return 0;
  }
  let [theMin, ...rest] = arr;
  for (const item of rest) {
    if (item < theMin) {
      theMin = item;
    }
  }
  return theMin;
};

exports.max = function max (arr) {
  if (arr === undefined || arr.length === 0) {
    return 0;
  }
  let [theMax, ...rest] = arr;
  for (const item of rest) {
    if (item > theMax) {
      theMax = item;
    }
  }
  return theMax;
};

exports.avg = function avg (arr) {
  if (arr === undefined || arr.length === 0) {
    return 0;
  }
  let sum = 0;
  for (const item of arr) {
    sum += item;
  }
  return sum / arr.length;
};
