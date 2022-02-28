function noOfElements(x, y, z) {
  let numEl = 0;
  let length = x.length;
  for (let i = 0; i <= length; i++) {
    if (x[i] >= y && x[i] <= z) {
      numEl++;
    }
  }
  return numEl;
}

console.log(noOfElements([2, 3, 0, 1, 7], 4, 8));
module.exports = noOfElements;
