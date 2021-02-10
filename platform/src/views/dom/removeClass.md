# removeClass

> 删除样式

| 参数                                     | 返回 | 描述 |
| ---------------------------------------- | ---- | ---- |
| (**ele**: Element, **class**: className) | void |      |

## 使用

```js
import { removeClass } from 'serein-utils';
removeClass(element, className);
```

## 例子

```js
import { removeClass } from 'serein-utils';
const _oDiv = document.getElementById('app');
removeClass(_oDiv, 'wrap');
```
