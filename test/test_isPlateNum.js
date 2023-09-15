var expect = require('expect.js');
var { isPlateNum } = require('../src/index.js');

describe('测试校验车牌号功能', function () {
  it('校验正确流程(新能源)', function () {
    expect(isPlateNum('京AF99999')).to.eql(true);
  });
  it('校验正确流程(非新能源)', function () {
    expect(isPlateNum('京A99999')).to.eql(true);
  });
});
