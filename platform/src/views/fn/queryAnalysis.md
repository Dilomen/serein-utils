# queryAnalysis

> 获取 url 路径上 query 的键值对，也可以获取 hash 模式的 query

| 参数              | 返回   | 描述              |
| ----------------- | ------ | ----------------- |
| (isHash: Boolean) | Object | 返回 query 键值对 |

## isHash

默认为 false  
url 是否取 hash 之后的作为 query，如 http:www.baidu.com#list?a=1&b=1

## 使用

```js
import { queryAnalysis } from 'serein-utils';
const queryObj = queryAnalysis(isHash);
```

## 例子

```js
import { queryAnalysis } from 'serein-utils';
// url: 'http:www.baidu.com?a=1&b=1'
const queryObj = queryAnalysis(); // { a:1, b: 1 }
// url: 'http:www.baidu.com#list?a=1&b=1'
const queryObj = queryAnalysis(true); // { a:1, b: 1 }
// url: 'http:www.baidu.com?a=1#list?b=1'
const queryObj = queryAnalysis(); // { a:1 }
const queryObj = queryAnalysis(true); // { b:1 }
```
