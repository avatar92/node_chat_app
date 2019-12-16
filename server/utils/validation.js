var isRealString=(str)=>{
  
  if(! (typeof str==='string')){
    return false
  }else if(str.trim()===''){
    return false
  }else{
    return true
  }
};

// console.log(isRealString(1))


module.exports={isRealString};