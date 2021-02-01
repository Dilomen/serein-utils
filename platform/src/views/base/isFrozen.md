# isFrozen

判断是否是冻结对象

| 参数             | 返回    | 描述               |
| ---------------- | ------- | ------------------ |
| (**value**: any) | Boolean | true 是 false 不是 |  |

## 使用

```js
import { isFrozen } from 'serein-utils';
isFrozen(obj);
```

## 例子

```js
const a = { b: 1 };
const result = isFrozen(a); // false
```

```js
const b = { c: 1 };
Object.freeze(b);
const result = isFrozen(b); // true
```

```js
const c = { d: 1 };
Object.defineProperty(c, 'd', {
  writable: false,
});
const result = isFrozen(c.d); // true
```
