# throttle

> 节流:一段时间内只能执行一次

| 参数                                  | 返回 | 描述 |
| ------------------------------------- | ---- | ---- |
| (**fn**: Function, **delay**: Number) | void |      |

## 使用

```js
import { throttle } from 'serein-utils';
throttle(fn, delay)(args);
```

## 例子

```js
import { throttle } from 'serein-utils';
function test(a, b) {
  console.log(a + b);
}
const fn = throttle(test, 500);
fn('Hello', ' World'); // Hello World
fn('Hello', ' World1');
setTimeout(() => {
  fn('Hello', ' World2'); // Hello World2
}, 600);
```
