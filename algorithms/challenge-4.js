function highestSum(x, y) {
  function sum(a) {
    let numSum = 0;
    let length = a.length;

    for (let i = 0; i < length; i++) {
      numSum += a[i];
    }
    return numSum;
  }
  let sumX = sum(x);
  let sumY = sum(y);
  if (sumX > sumY) {
    return sumX;
  } else {
    return sumY;
  }
}

console.log(([2, 5, 1, 0, 5, 7], [2, 3, 5, 6, 2, 1]));
module.exports = highestSum;
