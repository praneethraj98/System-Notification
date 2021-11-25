var SSE=require("sse")
var http=require("http")
var faker=require("faker")

var date=new Date()
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
var val=0
var server=http.createServer(function(req,res){
    res.writeHead(200,{
        "Content-type":"text/event-stream",
        "Access-Control-Allow-Origin":"*"
    })
setInterval(function(){
val++
time=date
randomNotification=faker.lorem.sentence();
msg="id: msg1\ndata:"+randomNotification+"-->"+val+"-->"+hours+":"+minutes+":"+seconds+"\n\n"
res.write(msg)
},500)
})
server.listen(8000,"127.0.0.1",function(){
    var sse=new SSE(server)
    sse.on("connection",function(client){
        client.send("Connectted")
    })
})