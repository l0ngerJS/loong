var expect = require('expect.js');
var { isPostcode } = require('../src/index.js');

describe('测试校验邮政编码功能', function () {
  it('校验正确流程', function () {
    expect(isPostcode('050091')).to.eql(true);
  });
});
