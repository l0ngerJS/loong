# treeToArray

实现树形结构转数组数据

## 参数

- param `array` tree 树形结构数据
- param `array` arr 传入的数组变量，默认为空数组，每级数据最终都会 push 到该数组中，并最终返回结果集

(注：默认子级数据都在 children 字段中)

## 返回

- return `array` 转换后的数组集合数据

## 示例

```js
const data = [
  {
    id: 1,
    name: '部门1',
    pid: 0,
    children: [
      {
        id: 2,
        name: '部门2',
        pid: 1,
        children: [],
      },
      {
        id: 3,
        name: '部门3',
        pid: 1,
        children: [
          {
            id: 4,
            name: '部门4',
            pid: 3,
            children: [
              {
                id: 5,
                name: '部门5',
                pid: 4,
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
];
// 1.
const arr = [];
treeToArray(data, arr);
console.log(arr);

// 2.
const arr = treeToArray(data);
console.log(arr);

// 返回结果
// [
//   { id: 1, name: '部门1', pid: 0 },
//   { id: 2, name: '部门2', pid: 1 },
//   { id: 3, name: '部门3', pid: 1 },
//   { id: 4, name: '部门4', pid: 3 },
//   { id: 5, name: '部门5', pid: 4 },
// ]
```
