import isDate from '../src/base/isDate'

test('test isDate', () => {
  const date1 = new Date();
  expect(isDate(date1)).toBeTruthy()
  const date2 = '2019-01-20';
  expect(isDate(date2)).toBeTruthy()
  const date3 = '2019-01-20 12:12:30';
  expect(isDate(date3)).toBeTruthy()
  const date4 = '2019-01-20 12';
  expect(isDate(date4)).toBeFalsy()
  const date5 = '2019-01-20 80:12:98';
  expect(isDate(date5)).toBeFalsy()
})