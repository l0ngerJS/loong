# type

获取数据类型

## 参数

- param `any` data 需要查询类型的数据

## 返回

- return `string` 数据类型结果

## 示例

```js
type([]); // 'array'
type({}); // 'object'
type(''); // 'string'
type(type); // 'function'
type(undefined); // 'undefined'
type(null); // 'null'
type(0); // 'number'
type(true); // 'boolean'
```
