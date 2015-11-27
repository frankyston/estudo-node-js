var http = require('http');

var server = http.createServer(function(request, response){
	response.writeHead(200, {"Content-Type": "text/html"});
	if (request.url == "/"){
		response.write("<h2>Hello World!</h2>");
	} else if (request.url == "/bemvindo"){
		response.write("<h2>Bem vindo :)</h2>");
	} else {
		response.write("<h2>Página não encontrada :(</h2>");d
	}
	response.end();
});

server.listen(3000, function(){
	console.log("Servidor Hello World rodando!");
});