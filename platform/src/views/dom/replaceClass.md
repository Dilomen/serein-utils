# replaceClass

> 替换样式

| 参数                                                                 | 返回 | 描述 |
| -------------------------------------------------------------------- | ---- | ---- |
| (**ele**: Element, **oldClass**: className, **newClass**: className) | void |      |

## 使用

```js
import { replaceClass } from 'serein-utils';
replaceClass(element, className, className);
```

## 例子

```js
import { replaceClass } from 'serein-utils';
const _oDiv = document.getElementById('app');
replaceClass(_oDiv, 'white', 'black');
```
