var expect = require('expect.js');
var { isTelephone } = require('../src/index.js');

describe('测试校验固话功能', function () {
  it('校验正确流程', function () {
    expect(isTelephone('0311-85858585')).to.eql(true);
  });
});
