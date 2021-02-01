# deepCopy

> 利用 proxy 实现深拷贝

| 参数             | 返回 | 描述           |
| ---------------- | ---- | -------------- |
| (copyValue: any) | any  | 深拷贝后的对象 |

## 使用

```js
import { deepCopy } from 'serein-utils';
deepCopy(copyValue);
```

## 例子

```js
import { deepCopy } from 'serein-utils';
const value = {
  c: {
    d: 2,
  },
};

const copyValue = deepCopy(value);

copyValue.c = 2;
console.log(copyValue); // { c: 2 }
console.log(value.c); // { d: 2 }
```
