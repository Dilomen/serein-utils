# composeSync

> 组合函数（复合函数）就是将多个函数作为参数传入，然后通过每一个函数的调用，返回结果。一个函数的返回值将作为另一个函数的参数

TIP: 该方法是只支持**同步**的使用

| 参数                                      | 返回 | 描述                 |
| ----------------------------------------- | ---- | -------------------- |
| (**fn**: Function, **fn**: Function, ...) | any  | 调用多个函数后的结果 |

## 使用

```js
import { composeSync } from 'serein-utils';
composeSync(fn, fn, fn, ...)(args);
```

## 例子

```js
import { composeSync } from 'serein-utils';

const fn1 = (a) => a + 1;
const fn2 = (a) => a + 2;

const composeFn = composeSync(fn1, fn2);
composeFn(1); // 4
```
