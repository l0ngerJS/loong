var expect = require('expect.js');
var { type } = require('../src/index.js');

describe('测试数据类型获取功能', function () {
  it('正常流程', function () {
    expect(type([])).to.eql('array');
    expect(type({})).to.eql('object');
    expect(type('')).to.eql('string');
    expect(type(type)).to.eql('function');
    expect(type(undefined)).to.eql('undefined');
    expect(type(null)).to.eql('null');
    expect(type(0)).to.eql('number');
    expect(type(true)).to.eql('boolean');
  });
});
