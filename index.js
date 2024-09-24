const http=require('http')
const express=require('express')
const{Server}=require('socket.io')
const path =require('path')

const app=express()
const server=http.createServer(app)
const io=new Server(server)

app.use(express.static(path.resolve('./public')))

// socket operation
// socket refer to client
io.on('connection',(socket)=>{
    socket.on('userMessage',(message)=>{
        io.emit('message',message);
    });
});

app.get('/',(req,res)=>{
    return res.sendFile('./public/index.html')
})

server.listen(9000,()=>{console.log`Server started st PORT:9000`});