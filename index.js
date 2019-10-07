const express=require('express')
const path=require('path')
const app=express()

app.use('/',express.static(path.join(__dirname,'/public')))
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"/public/index.html"))
})

app.get('/blog',(req,res)=>{
    res.sendFile(path.join(__dirname,"/public/blog.html"))
})

app.get('/accessDenied',(req,res)=>{
    console.log('in get acess denied')
    res.sendFile(path.join(__dirname,"/public/403.html"))
})


app.listen(3000,()=>{console.log('listenong at 3000')})