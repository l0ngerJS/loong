var expect = require('expect.js');
var { isIDCard } = require('../src/index.js');

describe('测试校验身份证号功能', function () {
  it('校验正确流程', function () {
    expect(isIDCard('123456199001141310')).to.eql(true);
  });
});
