# serein-utils

文档地址: <https://utils.dilomen.com/#/>

## 安装

```bash
yarn add -D serein-utils
```

或者

```bash
npm install --save-dev serein-utils
```

## 所有的方法均使用以下方式引入

```js
import { function } from 'serein-utils';
```

### dom:处理 DOM 的方法

| 方法名           | 作用                                                        | 参数                            | 返回                     |
| ---------------- | ----------------------------------------------------------- | ------------------------------- | ------------------------ |
| readClass        | 查看指定 class 名是否存在                                   | (ele:Element, className:String) | Boolean                  |
| addClass         | 添加样式                                                    | 无                              | 无                       |
| removeClass      | 删除样式                                                    | 无                              | 无                       |
| replaceClass     | 替换样式                                                    | 无                              | 无                       |
| getScrollHeight  | 获取当前元素的滚动高度， 默认（不传参）为整个页面的滚动高度 | (ele:Element)                   | 滚动高度: Number         |
| getClientHeight  | 获取当前元素的可视高度， 默认（不传参）为整个页面的可视高度 | (ele:Element)                   | 可视高度: Number         |
| getScrollTop     | 获取当前元素的滚动值， 默认（不传参）为整个页面的滚动值     | (ele:Element)                   | 当前元素的滚动值: Number |
| getParentElement | 获取父级元素                                                | (ele:Element)                   | 父级元素: Element        |
| loasdScript      | 加载 script 文件                                            | (src:String)                    | Promise                  |
| nextElement      | 下一个兄弟元素节点(不包括文本和注释节点)                    | (ele:Element)                   | (ele:Element)            |
| getElementStyle  | 获取元素的样式值                                            | (el, attr, pseudoElt:伪元素)    | style 值                 |
