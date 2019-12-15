const expect=require('expect');
const {generateMessage}=require('./message.js')

describe('generateMessage',()=>{
  it('should generate correct message object',()=>{
    var newMessage={
      from:'admin',
      text:'welcome'
    };
    // console.log(generateMessage(newMessage.from,newMessage.text).from)
    expect(generateMessage(newMessage.from,newMessage.text).from).toBe('admin');
    expect(generateMessage(newMessage.from,newMessage.text).text).toBe('welcome');
    expect(generateMessage(newMessage.from,newMessage.text).createdAt).toBeA('number');
  });
});