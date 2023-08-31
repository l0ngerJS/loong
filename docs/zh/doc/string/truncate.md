# truncate

字符串截断

## 参数

- param `string` str 需要截断的字符串
- param `number` len 截断的长度
- param `string` omission 超出限制显示字符串

## 返回

- return `string` 处理后的字符串

## 示例

```js
truncate('12345', 5); // 12345
truncate('123456', 5); // 12...
truncate('123456', 5, '-'); // 1234-
```
