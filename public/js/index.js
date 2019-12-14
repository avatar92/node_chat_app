var socket=io();
      socket.on('connect',function (){
        console.log('connected to server');
        // socket.emit('createEmail',{
        //   to:'adel@gmail.com',
        //   text:'hello adel'
        // });
        socket.emit('createMessage',{
          to:'adel',
          text:'i am fine thanks'
        })
      });
      socket.on('disconnect',function (){
        console.log('Disconnected from server');
      });
      // socket.on('newEmail',function(email){
      //   console.log('New Email',email)
      // });
      socket.on('newMessage',function(message){
        console.log('New Message:',message)
      });

