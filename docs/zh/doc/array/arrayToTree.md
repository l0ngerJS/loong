# arrayToTree

实现数组转树形结构数据

## 参数

- param `array` items 数组数据
- param `object` config 配置项
- param `string` config.id 子级字段
- param `string` config.pid 父级字段
- param `string`|`number` config.root 根节点对应值

## 返回

- return `array` 树形结构数据

## 示例

```js
const data = [
  { id: 1, name: '部门1', pid: 0 },
  { id: 2, name: '部门2', pid: 1 },
  { id: 3, name: '部门3', pid: 1 },
  { id: 4, name: '部门4', pid: 3 },
  { id: 5, name: '部门5', pid: 4 },
];
const treeData = arrayToTree(data, { id: 'id', pid: 'pid', root: 0 });
console.log(treeData);
// 返回结果
// [
//   {
//     id: 1,
//     name: '部门1',
//     pid: 0,
//     children: [
//       {
//         id: 2,
//         name: '部门2',
//         pid: 1,
//         children: [],
//       },
//       {
//         id: 3,
//         name: '部门3',
//         pid: 1,
//         children: [
//           {
//             id: 4,
//             name: '部门4',
//             pid: 3,
//             children: [
//               {
//                 id: 5,
//                 name: '部门5',
//                 pid: 4,
//                 children: [],
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   },
// ]
```
