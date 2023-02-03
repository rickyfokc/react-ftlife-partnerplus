var http=require('http');
var server=http.createServer(function(request,response){
		//handle imcoming request here...
});

var server = http.createServer(function (req, res) {   
 
   if (req.url == '/data') { //check the URL of the current request
           res.writeHead(200, { 'Content-Type': 'application/json' });
           res.write(JSON.stringify({ message: "Hello World"}));
           res.end();
   }
});

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration
