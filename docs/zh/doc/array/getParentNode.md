# getParentNode

实现树形查找当前节点的父节点

## 参数

- param `array` data 树形数据
- param `object` config 配置项
- param `string` config.key 查找节点字段
- param `string` config.value 查找节点字段值

## 返回

- return `object` 查找的节点

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
const obj1 = getParentNode(data, { key: 'id', value: 5 });
// obj1：
// {
//   id: 4,
//   name: '部门4',
//   pid: 3,
//   children: [
//     {
//       id: 5,
//       name: '部门5',
//       pid: 4,
//       children: [],
//     },
//   ],
// }
const obj2 = getParentNode(data, { key: 'id', value: 6 }); // null
```
