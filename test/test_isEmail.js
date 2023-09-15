var expect = require('expect.js');
var { isEmail } = require('../src/index.js');

describe('测试校验邮箱功能', function () {
  it('校验错误流程', function () {
    expect(isEmail('622202222')).to.eql(false);
  });
  it('校验正确流程', function () {
    expect(isEmail('123456@qq.com')).to.eql(true);
  });
});
