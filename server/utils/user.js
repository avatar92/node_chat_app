class Users{
  constructor () {
    this.users=[];
  }
  addUser(id,name,room){
    var user={id,name,room};
    this.users.push(user)
    return user;
  }
  removeUser(id){
    var user=this.users.filter((user)=>user.id===id)[0]
    if(user){
      this.users=this.users.filter((user)=>user.id!==id)
    }
    return user;
  }
  getUser(id){
    var user=this.users.filter((user)=>user.id===id)
    return user[0];
  }
  getUserList(room){
    var user=this.users.filter((user)=>{
      
      return user.room===room;
      
    });
    var namesArray=user.map((user)=>{
      return user.name
    });
    return namesArray;
  }
}

module.exports={Users}