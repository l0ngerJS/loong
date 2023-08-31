# pick

获取对象字段函数，获取某个对象的字段数据

## 参数

- param `object` obj 需要获取字段的对象
- param `array` paths 需要获取的字段

## 返回

- return `object` 获取的字段数据

## 示例

```js
const obj1 = { a: 1, b: 2, c: 3 };

const obj2 = pick(obj1, ['a', 'b']);

console.log(obj2); // { a: 1, b: 2 }
```
