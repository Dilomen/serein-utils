# isDate

判断是否是日期格式

| 参数             | 返回    | 描述               |
| ---------------- | ------- | ------------------ |
| (**value**: any) | Boolean | true 是 false 不是 |  |

## 使用

```js
import { isDate } from 'serein-utils';
isDate(obj);
```

## 例子

```js
const date1 = new Date();
isDate(date1); // true
```

```js
const date2 = '2019-01-20';
isDate(date2); // true
```

```js
const date3 = '2019-01-20 12:12:30';
isDate(date3); // true
```

```js
const date4 = '2019-01-20 12';
isDate(date4); // false
```

```js
const date5 = '2019-01-20 80:12:98';
isDate(date5); // false
```
