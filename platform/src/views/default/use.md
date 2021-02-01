# 快速开始

## 通过以下方式安装

```bash
npm install --save-dev serein-utils
```

或者

```bash
yarn add -D serein-utils
```

## 引入方法库

```js
import { Function } from 'serein-utils';
```

## 在 Vue 中的使用

```js
import sereinInstall from 'serein-utils';
Vue.use(sereinInstall);
```

```js
// 只需在方法名前加上_就可以通过this调用了
this._isArray(arr);
```
