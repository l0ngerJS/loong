var expect = require('expect.js');
var { isIP } = require('../src/index.js');

describe('测试校验IP地址功能', function () {
  it('校验错误流程', function () {
    expect(isIP([])).to.eql(false);
    expect(isIP('255.255.2555.222')).to.eql(false);
  });
  it('校验正确流程', function () {
    expect(isIP('127.0.0.1')).to.eql(true);
    expect(isIP('255.255.255.255')).to.eql(true);
  });
});
