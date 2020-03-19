### 所有的方法均使用以下方式引入

```js
import { function } from "dark-utils";
```

### utils:通用方法

| 方法名          | 作用                                 | 参数            | 返回                 |
| --------------- | ------------------------------------ | --------------- | -------------------- |
| tryFunc         | 执行方法 fn(...params)               | (fn, ...params) | fn 的执行结果        |
| tryPromiseFunc  | 执行 promise 方法                    | (fn, ...params) | promise 对象         |
| getParamsUrl    | 返回路径 location.serach 的键值对    | 无              | URLSearchParams 对象 |
| createRandomStr | 生成 10 位包含字母或数字的随机字符串 | 无              | string               |

### struct:类型结构方法

| 方法名     | 作用               | 参数         | 返回       |
| ---------- | ------------------ | ------------ | ---------- |
| isArray    | 是否是一个数组     | (value: any) | Boolean    |
| isObject   | 是否是一个对象     | (value: any) | Boolean    |
| isEmtpyObj | 是否是一个空对象   | (value: any) | Boolean    |
| isEmtpyArr | 是否是一个空数组   | (value: any) | Boolean    |
| isNumber   | 是否是一个数字     | (value: any) | Boolean    |
| deepCopy   | 转字符串实现深复制 | (value: any) | any |

### file:处理文件的方法

| 方法名              | 作用                            | 参数                 | 返回      |
| ------------------- | ------------------------------- | -------------------- | --------- |
| dataURLtoFile       | dataURL 转化为一个文件          | Data URL             | File 对象 |
| dataURLToBlob       | dataURL 转化为一个 Blob 对象    | Data URL             | Blob 对象 |
| blobToFile          | Blob 对象转化为一个文件         | Blob 对象            | File 对象 |
| fileOrBlobToDataURL | File 或 Blob 对象转化为 dataURL | File 对象\|Blob 对象 | Data URL  |
| fileToBlob          | File 对象转化为 Blob 对象       | File 对象            | Blob 对象 |
