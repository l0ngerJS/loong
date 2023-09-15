var expect = require('expect.js');
var { isBankCard } = require('../src/index.js');

describe('测试校验银行卡号功能', function () {
  it('校验错误流程', function () {
    expect(isBankCard('622202222')).to.eql(false);
  });
  it('校验正确流程', function () {
    expect(isBankCard('6222026006705354001')).to.eql(true);
  });
});
