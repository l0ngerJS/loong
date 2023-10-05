# getChildrenId

实现树形获取当前节点及以下的所有节点 id

## 参数

- param `array` data 树形数据
- param `array` idArr 结果集
- param `string` key 统计字段(默认取 id 字段)

## 返回

- return `array` 结果集

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
const ids = [];
const name = [];
const arr1 = getChildrenId(data); // [1, 2, 3, 4, 5]
const arr2 = getChildrenId(data, ids); // [1, 2, 3, 4, 5]
console.log(ids); // [1, 2, 3, 4, 5]
const arr3 = getChildrenId(data, name, 'name'); // ['部门1', '部门2', '部门3', '部门4', '部门5']
```
