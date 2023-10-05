var expect = require('expect.js');
var { obj2Param } = require('../src/index.js');

describe('测试-对象转url参数字符串-功能', function () {
  it('校验正确流程', function () {
    expect(obj2Param({ a: 1, b: 2 })).to.eql('a=1&b=2');
  });
  it('校验异常流程', function () {
    expect(obj2Param('')).to.eql('');
    expect(obj2Param(null)).to.eql('');
  });
});
