# hasOwnProperty

判断是否是对象的自身属性

| 传参                   | 结果   |
| ---------------------- | ------ |
| (obj 对象，key 属性名) | Object |

## 使用

```js
import { hasOwnProperty } from 'serein-utils';
hasOwnProperty(obj);
```

## 例子

```js
const obj = { a: 12, b: 1, c: 1 };
const result = hasOwnProperty(obj, 'd'); // false
const result = hasOwnProperty(obj, 'a'); // true
```
