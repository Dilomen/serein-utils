# isNumber

判断是否是 Number 类型

| 参数             | 返回    | 描述               |
| ---------------- | ------- | ------------------ |
| (**value**: any) | Boolean | true 是 false 不是 |  |

## 使用

```js
import { isNumber } from 'serein-utils';
isNumber(obj);
```

## 例子

```js
const string = 'string';
isNumber(string); // false
```

```js
const number = 123;
isNumber(number); // true
```
