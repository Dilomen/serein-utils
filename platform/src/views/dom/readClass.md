# readClass

> 查看指定 class 名是否存在

| 参数                                     | 返回    | 描述                     |
| ---------------------------------------- | ------- | ------------------------ |
| (**ele**: Element, **class**: className) | Boolean | true: 存在 false: 不存在 |

## 使用

```js
import { readClass } from 'serein-utils';
readClass(element, className);
```

## 例子

```js
import { readClass } from 'serein-utils';
const _oDiv = document.getElementById('app');
readClass(_oDiv, 'wrap');
```
