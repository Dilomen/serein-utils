# toString

返回一个表示该对象的字符串

| 参数             | 返回    | 描述               |
| ---------------- | ------- | ------------------ |
| (**value**: any) | Boolean | true 是 false 不是 |  |

## 使用

```js
import { toString } from 'serein-utils';
toString(obj);
```

## 例子

```js
const obj = {};
toString(obj); // "[object Object]"
```

```js
const arr = [];
toString(arr); // "[object Array]"
```

```js
const str = 'string';
toString(str); // "[object String]"
```
