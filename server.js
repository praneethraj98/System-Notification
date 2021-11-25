var SSE=require("sse")
var http=require("http")
var faker=require("faker")

var val=0
var date=new Date()
var server=http.createServer(function(req,res){
    res.writeHead(200,{
        "Content-type":"text/event-stream",
        "Access-Control-Allow-Origin":"*"
    })
setInterval(function(){
val++
time=Date.now()
randomNotification=faker.lorem.sentence();
msg="id: msg1\ndata:"+randomNotification+""+val+"\n\n"
res.write(msg)
},1000)
})
server.listen(8000,"127.0.0.1",function(){
    var sse=new SSE(server)
    sse.on("connection",function(client){
        client.send("Connectted")
    })
})