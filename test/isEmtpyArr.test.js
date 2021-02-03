import isEmtpyArr from '../src/base/isEmptyArr'

test('test isEmtpyArr', () => {
  const arr1 = [1, 2, 3];
  expect(isEmtpyArr(arr1)).toBeFalsy()
  const arr2 = [];
  expect(isEmtpyArr(arr2)).toBeTruthy()
})