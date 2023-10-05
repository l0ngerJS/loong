var expect = require('expect.js');
var { getTreeLeaf } = require('../src/index.js');

describe('测试-查找所有叶子节点-功能', function () {
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
  it('校验正确流程', function () {
    expect(getTreeLeaf(data, result)).to.eql([
      {
        id: 2,
        name: '部门2',
        pid: 1,
        children: [],
      },
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
      {
        id: 6,
        name: '部门6',
        pid: 1,
        children: [],
      },
      {
        id: 8,
        name: '部门8',
        pid: 0,
        children: [],
      },
    ]);
  });
});
