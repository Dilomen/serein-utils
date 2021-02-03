# tryPromiseFunc

> 执行一个 Promise 方法

| 参数                              | 返回 | 描述           |
| --------------------------------- | ---- | -------------- |
| (**fn**: Function, **args**: any) | any  | 方法的返回结果 |

## 使用

```js
import { tryPromiseFunc } from 'serein-utils';
tryPromiseFunc(fn, args);
```

## 例子

```js
import { tryPromiseFunc } from 'serein-utils';
function test(a, b) {
  return a + b;
}
tryPromiseFunc(test, 'Hello', ' World').then((data) => {
  console.log(data); // 'Hello World'
});
```

```js
function test1(a, b) {
  return new Promise((resolve) => {
    resolve(a + b);
  });
}
tryPromiseFunc(test1, 'Hello', ' World').then((data) => {
  console.log(data); // 'Hello World'
});
```
