function divisible(a) {
  let numDivBy2 = 0;
  let length = a.length;

  for (let i = 0; i <= length; i++) {
    if (a[i] > 15 && a[i] % 2 === 0) {
      numDivBy2++;
    }
  }
  return numDivBy2;
}

console.log(divisible([2, 3, 12, 18, 42, 24]));

module.exports = divisible;
