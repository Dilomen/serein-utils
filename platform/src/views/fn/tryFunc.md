# tryFunc

> 执行一个函数方法

| 参数                              | 返回 | 描述           |
| --------------------------------- | ---- | -------------- |
| (**fn**: Function, **args**: any) | any  | 方法的返回结果 |

## 使用

```js
import { tryFunc } from 'serein-utils';
tryFunc(fn, args);
```

## 例子

```js
import { tryFunc } from 'serein-utils';
function test(a, b) {
  console.log(a, b);
}
tryFunc(test, 'Hello', ' World'); // 'Hello', 'World'
```
