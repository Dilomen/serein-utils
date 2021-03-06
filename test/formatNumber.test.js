import formatNumber from '../src/fn/formatNumber'

test('test formatNumber positive integer', () => {
  expect(formatNumber(38746236492834)).toBe('38,746,236,492,834')
});
test('test formatNumber negative integer', () => {
  expect(formatNumber(-38746236492834)).toBe('-38,746,236,492,834')
});
test('test formatNumber integer and decimal', () => {
  expect(formatNumber(387462.34234)).toBe('387,462.34234')
});