import isArray from '../src/base/isArray'

test('test isArray', () => {
  const number = 1;
  expect(isArray(number)).toBeFalsy()
  const arr = [1, 2, 3];
  expect(isArray(arr)).toBeTruthy()
  const obj = { a: 1 };
  expect(isArray(obj)).toBeFalsy()
  const string = 'hello';
  expect(isArray(string)).toBeFalsy()
  const set = new Set();
  expect(isArray(set)).toBeFalsy()
})