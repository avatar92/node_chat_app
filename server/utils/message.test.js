const expect=require('expect');
const {generateMessage,generateLocationMessage}=require('./message.js')

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

describe('generateLocationMessage',()=>{
  it('should generate the location message',()=>{
    var newLocationMessage={
      from:'adel',
      latitude:1,
      longitude:1
    }
    expect(generateLocationMessage(newLocationMessage.from,newLocationMessage.latitude,newLocationMessage.longitude).url).toBe(`https://www.google.com/maps?q=${newLocationMessage.latitude},${newLocationMessage.longitude}`);
    expect(generateLocationMessage(newLocationMessage.from,newLocationMessage.latitude,newLocationMessage.longitude).from).toBe('adel');
    expect(generateLocationMessage(newLocationMessage.from,newLocationMessage.latitude,newLocationMessage.longitude).createdAt).toBeA('number')
  })
});