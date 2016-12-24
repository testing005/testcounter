var express=require('express');

var app=new express();
var http=require('http').Server(app);
var io=require("socket.io")(http);
var counter=30;
app.listen(process.env.PORT||6000,function(){
 console.log("listening on port 6000");
});
/*http.listen(5000,function(){
 console.log("listening on port 6000");
});*/


app.use(function(req,res,next){
 res.setHeader('Access-Control-Allow-Origin','*');
 res.setHeader('Access-Control-Allow-Method','GET,POST,OPTIONS,PUT,PATCH,DELETE');
 res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type');
 next();
})


app.get("/countdown",function(req,res){
     var state=req.param('state');
     res.writeHead(200,{"Content-Type":"application/octet-stream"});
     if(state=="start")
     	{    res.write("started");
             
     		var timer=setInterval(function(){
     			io.emit("timer",counter);
                console.log(counter);
                //res.write(" "+counter);
     			counter--;
     			if(counter==0){
     				counter=30;}
     		},1000);

     		setTimeout(function(){
     			clearInterval(timer);
     		},31000);
     	}
   res.end();
     	
});
                                          


/*var timer=setInterval(function() {
        res.write(" "+counter);
         counter--;
         if(counter==31){clearInterval(timer);}
         }, 1000);*/                                          
