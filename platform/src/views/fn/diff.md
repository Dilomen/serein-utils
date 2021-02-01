# diff

> 比较两个对象的不同

| 参数                                         | 返回  | 描述           |
| -------------------------------------------- | ----- | -------------- |
| (**newValue**: Object, **oldValue**: Object) | Array | 两者区别的部分 |

## 使用

```js
import { diff } from 'serein-utils';
diff(newObj, oldObj);
```

## 例子

```js
const oldObj = {
  c: {
    d: 1,
  },
};
const newObj = {
  c: {
    d: 2,
  },
};

import { diff } from 'serein-utils';
diff(newObj, oldObj); // [{ "old": 1, new: 2, "path": ["c", "d"], "type": "replace" }]
```
