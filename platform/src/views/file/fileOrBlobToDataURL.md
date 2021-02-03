# fileOrBlobToDataURL

file 文件或者 Blob 数据转化为 DataURL 数据

| 传参            | 结果            |
| --------------- | --------------- |
| (**file**: File | **blob**: Blob) | **DataURL**: String |

## 使用

```js
import { fileOrBlobToDataURL } from 'serein-utils';
const dataURL = fileOrBlobToDataURL(file);
const dataURL = fileOrBlobToDataURL(blob);
```
