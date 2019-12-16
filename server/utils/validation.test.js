const expect=require('expect');
const {isRealString}=require('./validation');


describe('isRealString',()=>{
  it('should reject Non string value',()=>{
    var str=1;
    expect(isRealString(str)).toBe(false)
  });
  it('should reject string with only spaces',()=>{
    var str='       ';
    expect(isRealString(str)).toBe(false)
  });
  it('should allow string with no space character',()=>{
    var str='abcjd12kqsd'
    expect(isRealString(str)).toBe(true)
  });
});