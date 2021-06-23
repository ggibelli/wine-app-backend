const isPivaValid = (function (arr) {
  return function (ccNum: string): boolean | 0 {
    let len = ccNum.length;
    let bit = 1;
    let sum = 0;
    let val;

    while (len) {
      val = parseInt(ccNum.charAt(--len), 10);
      // eslint-disable-next-line no-cond-assign
      sum += (bit ^= 1) ? arr[val] : val;
    }

    return sum && sum % 10 === 0;
  };
}([0, 2, 4, 6, 8, 1, 3, 5, 7, 9]));

export default isPivaValid;
