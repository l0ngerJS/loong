# cleanArray

清理数组数据，清除空数据、null、undefined 等无意义数据项

## 参数

- param `array` actual 待清理数组

## 返回

- return `array` 清理后数组

## 示例

```js
const data = ['1', null, undefined, 2, {}, []];
cleanArray(data); // ['1', 2, {}, []]
```
