var expect = require('expect.js');
var { pickTreeItem } = require('../src/index.js');

describe('测试获取树形结构某项节点数据功能', function () {
  it('校验正确流程', function () {
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
    expect(pickTreeItem(data, (item) => ids.includes(item.id))).to.eql([
      {
        id: 4,
        name: '部门4',
        pid: 3,
      },
      {
        id: 3,
        name: '部门3',
        pid: 1,
      },
      {
        id: 1,
        name: '部门1',
        pid: 0,
      },
    ]);
  });
});
