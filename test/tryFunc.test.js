import tryFunc from '../src/fn/tryFunc';

test('test tryFunc', () => {
  function test (a, b) {
    return a + b;
  }
  expect(tryFunc(test, 'Hello', ' World')).toBe('Hello World')
})
