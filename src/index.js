// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  var arr = [50, 25, 10, 5, 1], resultArr = [], result = {}; 
  if (currency <= 0) {
    return {};
  }
  if (currency > 10000) {
    return {error: "You are rich, my friend! We don't have so much coins for exchange"}
  }
  for (var i = 0; i < arr.length; i++) {
    var count = 0;
    while (currency >= arr[i]) {
      count = Math.floor(currency / arr[i]);
      currency = currency % arr[i];
    }
    if (count !== 0) {
      switch (i) {
          case 0:
          result.H = count;
          break;
          case 1:
          result.Q = count;
          break;
          case 2:
          result.D = count;
          break;
          case 3:
          result.N = count;
          break;
          case 4:
          result.P = count;
          break;
      } 
    }
  }
  return result;
}
