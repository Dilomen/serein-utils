import diff from '../src/fn/diff'

test('test diff delete field', () => {
  const a = {}
  const b = {
    c: 1
  }
  expect(diff(a, b)).toEqual([{ "old": 1, "path": ["c"], "type": "delete" }]);
});

test('test diff add field', () => {
  const a = {
    c: 1
  }
  const b = {}
  expect(diff(a, b)).toEqual([{ "new": 1, "path": ["c"], "type": "add" }]);
});

test('test diff replace field', () => {
  const a = {
    c: {
      d: 2
    }
  }
  const b = {
    c: {
      d: 1
    }
  }
  expect(diff(a, b)).toEqual([{ "old": 1, new: 2, "path": ["c", "d"], "type": "replace" }]);
});