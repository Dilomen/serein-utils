import tryPromiseFunc from '../src/fn/tryPromiseFunc';

test('test tryPromiseFunc with sync Function', (done) => {
  function test (a, b) {
    return a + b;
  }
  tryPromiseFunc(test, 'Hello', ' World').then((data) => {
    expect(data).toBe('Hello World')
    done();
  });
})

test('test tryPromiseFunc with async Function', (done) => {
  function test1 (a, b) {
    return new Promise((resolve) => {
      resolve(a + b);
    });
  }
  tryPromiseFunc(test1, 'Hello', ' World').then((data) => {
    expect(data).toBe('Hello World')
    done();
  });
})
