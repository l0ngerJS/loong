# pickTreeItem

实现获取树形结构某项节点数据

## 参数

- param `array` list 树形结构数据
- param `function` cb 回调函数，用于判断是否需要的节点

(注：默认子级数据都在 children 字段中)

## 返回

- return `array` 获取的节点数据集合

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

const ids = [1, 3, 4];
const arr = pickTreeItem(data, (item) => ids.includes(item.id));
console.log(arr);

// 返回结果
// [
//   { id: 4, name: '部门4', pid: 3 },
//   { id: 3, name: '部门3', pid: 1 },
//   { id: 1, name: '部门1', pid: 0 },
// ]
```
