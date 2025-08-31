module.exports = function reverse(n) {
  const nStr = Math.abs(n).toString();
  const reverseStr = nStr.split('').reverse().join('');
  return parseInt(reverseStr, 10);
};
