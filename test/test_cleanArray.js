var expect = require('expect.js');
var { cleanArray } = require('../src/index.js');

describe('测试-清理数组数据-功能', function () {
  const data = ['1', null, undefined, 2, {}, []];
  it('校验正确流程', function () {
    expect(cleanArray(data)).to.eql(['1', 2, {}, []]);
  });
});
