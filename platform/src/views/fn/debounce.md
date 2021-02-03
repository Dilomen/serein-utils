# debounce

> 防抖:在一定时间内再次触发，会重新计算执行时间

| 参数                                  | 返回 | 描述 |
| ------------------------------------- | ---- | ---- |
| (**fn**: Function, **delay**: Number) | void |      |

## 使用

```js
import { debounce } from 'serein-utils';
debounce(fn, delay)(args);
```

## 例子

```js
import { throttle } from 'serein-utils';
function test(a, b) {
  console.log(a + b);
}
const fn = debounce(test, 500);
fn('Hello', ' World');
fn('Hello', ' World1'); // Hello World1
setTimeout(() => {
  fn('Hello', ' World2'); // Hello World2
}, 600);
```
