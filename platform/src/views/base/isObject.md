# isObject

判断是否对象

| 参数             | 返回    | 描述               |
| ---------------- | ------- | ------------------ |
| (**value**: any) | Boolean | true 是 false 不是 |  |

## 使用

```js
import { isObject } from 'serein-utils';
isObject(obj);
```

## 例子

```js
const arr = [];
const result = isObject(arr); // false
```

```js
const obj = {};
const result = isObject(obj); // true
```
