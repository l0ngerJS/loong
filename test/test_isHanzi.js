var expect = require('expect.js');
var { isHanzi } = require('../src/index.js');

describe('测试校验邮箱功能', function () {
  it('校验错误流程', function () {
    expect(isHanzi('zhangsan')).to.eql(false);
  });
  it('校验正确流程', function () {
    expect(isHanzi('张三')).to.eql(true);
  });
});
