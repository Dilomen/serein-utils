# blobToFile

Blob 对象转化为一个文件

| 传参                                                     | 结果           |
| -------------------------------------------------------- | -------------- |
| (**blob**: Blob, **filename**: string, **type**: string) | **file**: File |

### blob

Blob 类型，待转换的 Blob 数据

### filename

String 类型，可选参数，转换的文件名，默认值为 file

### type

String 类型，可选参数，待转化后文件的类型

## 使用

```js
import { blobToFile } from 'serein-utils';
const file = blobToFile(blob);
```

## 例子

```js
import { blobToFile } from 'serein-utils';
const file = blobToFile(blob, 'pic', 'image/png');
```
