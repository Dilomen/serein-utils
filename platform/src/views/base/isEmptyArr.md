# isEmtpyArr

判断是否空数组

| 参数             | 返回    | 描述               |
| ---------------- | ------- | ------------------ |
| (**value**: Array) | Boolean | true 是 false 不是 |  |

## 使用

```js
import { isEmtpyArr } from 'serein-utils';
isEmtpyArr(array);
```

## 例子

```js
const arr1 = [1, 2, 3];
const result = isEmtpyArr(arr1); // false
```

```js
const arr2 = [];
const result = isEmtpyArr(arr2); // true
```
