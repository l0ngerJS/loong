var expect = require('expect.js');
var { validateIP } = require('../src/index.js');

describe('测试校验IP地址功能', function () {
  it('校验错误流程', function () {
    expect(validateIP([])).to.eql(false);
    expect(validateIP('255.255.2555.222')).to.eql(false);
  });
  it('校验正确流程', function () {
    expect(validateIP('127.0.0.1')).to.eql(true);
    expect(validateIP('255.255.255.255')).to.eql(true);
  });
});
