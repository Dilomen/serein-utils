# isEmtpyObj

判断是否空对象

| 参数               | 返回    | 描述               |
| ------------------ | ------- | ------------------ |
| (**value**: Object) | Boolean | true 是 false 不是 |  |

## 使用

```js
import { isEmtpyArr } from 'serein-utils';
isEmtpyObj(object);
```

## 例子

```js
const obj1 = { a: 1 };
const result = isEmtpyObj(obj1); // false
```

```js
const obj2 = {};
const result = isEmtpyObj(obj2); // true
```
