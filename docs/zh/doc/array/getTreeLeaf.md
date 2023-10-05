# getTreeLeaf

实现树形查找所有叶子节点

## 参数

- param `array` data 树形数据
- param `array` leafArr 结果集

## 返回

- return `array` 查找的叶子节点集合

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
              {
                id: 7,
                name: '部门7',
                pid: 4,
                children: [],
              },
            ],
          },
        ],
      },
      {
        id: 6,
        name: '部门6',
        pid: 1,
        children: [],
      },
    ],
  },
  {
    id: 8,
    name: '部门8',
    pid: 0,
    children: [],
  },
];
const result = [];
const arr = getTreeLeaf(data, result);
// result:
// [
//   {
//     id: 2,
//     name: '部门2',
//     pid: 1,
//     children: [],
//   },
//   {
//     id: 5,
//     name: '部门5',
//     pid: 4,
//     children: [],
//   },
//   {
//     id: 7,
//     name: '部门7',
//     pid: 4,
//     children: [],
//   },
//   {
//     id: 6,
//     name: '部门6',
//     pid: 1,
//     children: [],
//   },
//   {
//     id: 8,
//     name: '部门8',
//     pid: 0,
//     children: [],
//   },
// ]
```
