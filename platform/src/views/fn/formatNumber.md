# formatNumber

> 分割数字千位符

| 参数             | 返回 | 描述           |
| ---------------- | ---- | -------------- |
| (num: Number) | string  | 使用,分割千位符的字符串 |

## 使用

```js
import { formatNumber } from 'serein-utils';
formatNumber(num);
```

## 例子

```js
import { formatNumber } from 'serein-utils';
const num1 = 38746236492834;
const num2 = -38746236492834;
const num3 = 387462.34234;
const formatNum = formatNumber(num1); // 38,746,236,492,834
const formatNum = formatNumber(num2); // -38,746,236,492,834
const formatNum = formatNumber(num3); // 387,462.34234
```
