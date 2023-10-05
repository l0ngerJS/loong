var expect = require('expect.js');
var { param2Obj } = require('../src/index.js');

describe('测试-url参数字符串转对象-功能', function () {
  it('校验正确流程', function () {
    expect(param2Obj('xxxx?a=1&b=2')).to.eql({ a: 1, b: 2 });
  });
  it('校验异常流程', function () {
    expect(param2Obj('')).to.eql({});
  });
});
