var expect = require('expect.js');
var { isIpMask } = require('../src/index.js');

describe('测试校验子网掩码功能', function () {
  it('校验错误流程', function () {
    expect(isIpMask('0.0.0.0')).to.eql(false);
  });
  it('校验正确流程', function () {
    expect(isIpMask('255.255.255.0')).to.eql(true);
  });
});
