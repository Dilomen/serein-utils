### 所有的方法均使用以下方式引入

```js
import { function } from 'serein-utils';
```

### utils:通用方法

| 方法名          | 作用                                 | 参数            | 返回                 |
| --------------- | ------------------------------------ | --------------- | -------------------- |
| tryFunc         | 执行方法 fn(...params)               | (fn, ...params) | fn 的执行结果        |
| tryPromiseFunc  | 执行 promise 方法                    | (fn, ...params) | promise 对象         |
| searchParams    | 返回路径 location.serach 的键值对    | 无              | URLSearchParams 对象 |
| createRandomStr | 生成 10 位包含字母或数字的随机字符串 | 无              | string               |
| isMobile        | 是否是移动端                         | 无              | boolean              |
| debounce        | 防抖                                 | (fn, delay)     | 无                   |
| throttle        | 节流                                 | (fn, delay)     | 无                   |
| isDateFormat    | 是否是日期格式                       | (data)          | boolean              |

### struct:类型结构方法

| 方法名     | 作用               | 参数         | 返回    |
| ---------- | ------------------ | ------------ | ------- |
| isArray    | 是否是一个数组     | (value: any) | Boolean |
| isObject   | 是否是一个对象     | (value: any) | Boolean |
| isEmtpyObj | 是否是一个空对象   | (value: any) | Boolean |
| isEmtpyArr | 是否是一个空数组   | (value: any) | Boolean |
| isNumber   | 是否是一个数字     | (value: any) | Boolean |
| deepCopy   | 转字符串实现深复制 | (value: any) | any     |

### file:处理文件的方法

| 方法名              | 作用                            | 参数                 | 返回      |
| ------------------- | ------------------------------- | -------------------- | --------- |
| dataURLtoFile       | dataURL 转化为一个文件          | Data URL             | File 对象 |
| dataURLToBlob       | dataURL 转化为一个 Blob 对象    | Data URL             | Blob 对象 |
| blobToFile          | Blob 对象转化为一个文件         | Blob 对象            | File 对象 |
| fileOrBlobToDataURL | File 或 Blob 对象转化为 dataURL | File 对象\|Blob 对象 | Data URL  |
| fileToBlob          | File 对象转化为 Blob 对象       | File 对象            | Blob 对象 |

### dom:处理 DOM 的方法

| 方法名           | 作用                                                        | 参数                            | 返回                     |
| ---------------- | ----------------------------------------------------------- | ------------------------------- | ------------------------ |
| stopPropagation  | 防止冒泡                                                    | 无                              | 无                       |
| preventDefault   | 取消默认事件                                                | 无                              | 无                       |
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
