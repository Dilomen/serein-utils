# getElementStyle

> 获取元素的样式

| 参数                                                        | 返回 | 描述 |
| ----------------------------------------------------------- | ---- | ---- |
| (**ele**: Element, **attr**: String, **pseudoElt**: String) | any  |      |

## pseudoElt

伪元素

## 使用

```js
import { getElementStyle } from 'serein-utils';
getElementStyle(element, attr, pseudoElt);
```

## 例子

```html
<div id="app" style="width: 200px;"></div>
;
```

```css
#app {
  height: 100px;
}
#app::before {
  content: 'Hello';
  width: 100px;
}
```

```js
import { getElementStyle } from 'serein-utils';
const _oDiv = document.getElementById('app');
getElementStyle(_oDiv, 'height'); // 100px
getElementStyle(_oDiv, 'width'); // 200px
getElementStyle(_oDiv, 'content', '::before'); // 'Hello'
```
