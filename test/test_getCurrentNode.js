var expect = require('expect.js');
var { getCurrentNode } = require('../src/index.js');

describe('测试-查找当前节点-功能', function () {
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
  it('校验正确流程', function () {
    expect(getCurrentNode(data, { key: 'id', value: 5 })).to.eql({
      id: 5,
      name: '部门5',
      pid: 4,
      children: [],
    });
  });
  it('校验错误流程', function () {
    expect(getCurrentNode(data, { key: 'id', value: 6 })).to.eql(null);
  });
});
