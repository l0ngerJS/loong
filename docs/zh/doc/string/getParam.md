# getParam

获取 URL 参数函数

## 参数

- param `string` name 需要获取的参数字段
- param `string` url 目标地址

## 返回

- return `string` 获取的参数值

## 示例

```js
const url = 'http://localhost:8888/test.html?name=张三&id=123';

getParam('name', url); // 张三
getParam('test', url); // ''
```
