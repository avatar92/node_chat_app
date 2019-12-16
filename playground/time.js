const moment=require('moment');

var createdAt=new Date().getTime();
console.log('moment methods:',moment().valueOf(),'Date methods get time:',createdAt)
var date=moment();
date.add(1,'years').subtract(13,'months')
// console.log(date.format('MMM Do, YYYY'));
console.log(date.format('h:mm a'));

