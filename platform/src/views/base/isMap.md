# isMap

判断是否是 Map 类型

| 参数             | 返回    | 描述               |
| ---------------- | ------- | ------------------ |
| (**value**: any) | Boolean | true 是 false 不是 |  |

## 使用

```js
import { isMap } from 'serein-utils';
isMap(obj);
```

## 例子

```js
const obj = {};
isMap(obj); // false
```

```js
const string = 'string';
isMap(string); // false
```

```js
const map = new Map();
isMap(map); // true
```
