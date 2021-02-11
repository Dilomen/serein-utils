# compose

> 组合函数（复合函数）就是将多个函数作为参数传入，然后通过每一个函数的调用，返回结果。一个函数的返回值将作为另一个函数的参数

TIP: 该方法是支持**异步**的使用

| 参数                                      | 返回 | 描述                 |
| ----------------------------------------- | ---- | -------------------- |
| (**fn**: Function, **fn**: Function, ...) | any  | 调用多个函数后的结果 |

## 使用

```js
import { compose } from 'serein-utils';
compose(fn, fn, fn, ...)(args);
```

## 例子

```js
import { compose } from 'serein-utils';

const fn1 = (a) => {
  new Promise((resolve) => {
    resolve(a + 1);
  });
};

const fn2 = (a) => a + 2;
const fn3 = (a) => {
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(a + 3);
    });
  });
};

const composeFn = compose(fn1, fn2, fn3);
composeFn(1).then((data) => {
  console.log(data); // 7
});
```
