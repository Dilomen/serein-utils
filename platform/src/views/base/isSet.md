# isMap

判断是否是 Set 类型

| 参数             | 返回    | 描述               |
| ---------------- | ------- | ------------------ |
| (**value**: any) | Boolean | true 是 false 不是 |  |

## 使用

```js
import { isSet } from 'serein-utils';
isSet(obj);
```

## 例子

```js
const obj = {};
isSet(obj); // false
```

```js
const string = 'string';
isSet(string); // false
```

```js
const map = new Map();
isSet(map); // false
```

```js
const set = new Set();
isSet(set); // true
```
