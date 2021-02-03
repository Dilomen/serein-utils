import deepCopy from '../src/fn/deepCopy'

test('test deepCopy', () => {
  const a = {
    b: {
      c: {
        d: 1
      }
    }
  }
  const b = deepCopy(a)
  b.b.c = 1
  expect(a.b.c).toEqual({ d: 1 });
  expect(b.b.c).toEqual(1);
});