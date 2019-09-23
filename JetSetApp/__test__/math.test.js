// math.test.js

import {sum, sub, mul, div} from '../math.js'

test("Adding 48 + 24 equals 72", ()=> {
  expect(sum(48,24)).toBe(72)
});
test("Substracting 48 - 24 equals 24", ()=> {
  expect(sub(48,24)).toBe(24)
});
test("Multiplying 2 * 8 equals 16", ()=> {
  expect(mul(2,8)).toBe(16)
});
test("Divding 48 / 24 equals 2", ()=> {
  expect(div(48,24)).toBe(2)
});
