var expect = require('expect.js');
var { getChildrenId } = require('../src/index.js');

describe('测试-获取当前节点及以下的所有节点id-功能', function () {
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
    const ids = [];
    const name = [];
    expect(getChildrenId(data)).to.eql([1, 2, 3, 4, 5]);
    expect(getChildrenId(data, ids)).to.eql([1, 2, 3, 4, 5]);
    expect(ids).to.eql([1, 2, 3, 4, 5]);
    expect(getChildrenId(data, name, 'name')).to.eql([
      '部门1',
      '部门2',
      '部门3',
      '部门4',
      '部门5',
    ]);
  });
});
