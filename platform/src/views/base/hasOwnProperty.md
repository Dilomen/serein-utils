# hasOwnProperty

> 判断是否是对象的自身属性

| 参数                   | 返回    | 描述               |
| ---------------------- | ------- | ------------------ |
| (**value**: any, **key**: String) | Boolean | true是 false不是 |  |

## 使用

```js
import { hasOwnProperty } from 'serein-utils';
hasOwnProperty(obj, key);
```

## 例子

```js
const obj = { a: 12, b: 1, c: 1 };
const result = hasOwnProperty(obj, 'd'); // false
const result = hasOwnProperty(obj, 'a'); // true
```
