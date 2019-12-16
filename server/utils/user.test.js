const expect=require('expect');

const {Users}=require('./user.js');


describe('User class',()=>{
  var users;
  
  beforeEach(()=>{
    users=new Users();
    users.users=[
      {
        id:1,
        name:"adel",
        room:"Go my Code"
      },
      {
        id:2,
        name:"amine",
        room:"Iset"
      },
      {
        id:3,
        name:"asma",
        room:"Go my Code"
      },
    ];
  });
  it('should remove a user',()=>{
    var userList=users.removeUser(1);
    expect(userList).toEqual({id:1,name:"adel",room:"Go my Code"})
    expect(users.users.length).toBe(2);
  });
  it('should Not remove the user',()=>{
    var userList=users.removeUser(9);
    expect(userList).toNotExist()
    expect(users.users.length).toBe(3);
  });
  it('should find the user',()=>{
    var userList=users.getUser(1);
    expect(userList).toEqual({id:1,name:"adel",room:"Go my Code"})
  });
  it('should Not find the user',()=>{
    var userList=users.getUser(9);
    expect(userList).toNotExist()
  });
  it('should add new user',()=>{
    var users=new Users();
    var user={
      id:1,
      name:'adel',
      room:"Go my Code"
    };
    var resUser= users.addUser(user.id,user.name,user.room);
    expect(users.users).toEqual([user]);
  });
  it('should return the names of user',()=>{
    var userList=users.getUserList('Go my Code');
    expect(userList).toEqual(['adel','asma']);
  });
})