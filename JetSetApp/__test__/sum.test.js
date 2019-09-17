const sum = require('.././sum');

test('add 25 + 50 to equals 75',()=>{
  expect(sum(25,50)).toBe(75);
});
