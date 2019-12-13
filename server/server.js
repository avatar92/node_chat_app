/*core module */
const path=require('path')

/*third party module*/
const express=require('express');

const app=express(); 

const publicPath=path.join(__dirname,'../public');
app.use(express.static(publicPath))

const port = process.env.PORT || 3055; 


app.get('/',(req,res)=>{
  res.send('index.html')
});



app.listen(port,()=>{
  console.log(`server is running in port: ${port}`)
})