/*core module */
const path=require('path');
const http=require('http');
/*third party module*/
const express=require('express');
const socketIO=require('socket.io');

/*setting port for heroku */
const port = process.env.PORT || 3055;

const app=express();  
const server=http.createServer(app);
const io=socketIO(server);



const publicPath=path.join(__dirname,'../public');
app.use(express.static(publicPath))

io.on('connection',(socket)=>{
  console.log('New user connected');
  socket.on('disconnect',()=>{
    console.log('User disconnected')
  });
  // socket.emit('newEmail',{
  //   from:"amine@example.com",
  //   text:'hi',
  //   createdAt:123
  // });
  // socket.on('createEmail',(newEmail)=>{
  //   console.log(newEmail)
  // });
  socket.emit('newMessage',{
    from:'amine',
    text:'how are you?',
    createdAt:523
  });
  socket.on('createMessage',(newMessage)=>{
    console.log(newMessage)
  });
}); 






server.listen(port,()=>{
  console.log(`server is running in port: ${port}`)
})