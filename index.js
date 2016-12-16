var express=require('express');

var app=new express();
var http=require('http').Server(app);
var io=require("socket.io")(http);
var counter=30;
/*app.listen(process.env.port||6000,function(){
 console.log("listening on port 6000");
});*/
http.listen(5000,function(){
 console.log("listening on port 6000");
});




app.get("/countdown",function(req,res){
     var state=req.param('state');
     res.writeHead(200,{"Content-Type":"text/html"});
     if(state=="start")
     	{    res.write("started");
             res.end();
     		var timer=setInterval(function(){
     			io.emit("timer",counter);
     			counter--;
     			if(counter==0){
     				counter=30;}
     		},1000);

     		setTimeout(function(){
     			clearInterval(timer);
     		},31000);
     	}
     	
});
                                          


/*var timer=setInterval(function() {
        res.write(" "+counter);
         counter--;
         if(counter==31){clearInterval(timer);}
         }, 1000);*/                                          