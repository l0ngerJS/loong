var expect = require('expect.js');
var { treeToArray } = require('../src/index.js');

describe('测试树形结构转数组功能', function () {
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
    expect(treeToArray(data)).to.eql([
      { id: 1, name: '部门1', pid: 0 },
      { id: 2, name: '部门2', pid: 1 },
      { id: 3, name: '部门3', pid: 1 },
      { id: 4, name: '部门4', pid: 3 },
      { id: 5, name: '部门5', pid: 4 },
    ]);
  });
});
