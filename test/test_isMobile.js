var expect = require('expect.js');
var { isMobile } = require('../src/index.js');

describe('测试校验手机号功能', function () {
  it('校验错误流程', function () {
    expect(isMobile('10000000000')).to.eql(false);
  });
  it('校验正确流程', function () {
    expect(isMobile('15033336666')).to.eql(true);
  });
});
