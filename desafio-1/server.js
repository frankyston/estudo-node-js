var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function(request, response){
	file = getFileByPath(url.parse(request.url, true).pathname);
	fs.readFile(file, function(erro, html){
		response.writeHead(200, {"Content-Type": "text/html"});
		response.end(html);
	});
});

server.listen(3000, function(){
	console.log("Desafio 1 rodando!");
});

function getFileByPath(path){
	file = (path == "/") ? "/artigos.html" : "/" + path + ".html";
	file = __dirname + file;
	return (fs.existsSync(file)) ? file : __dirname + "/erro.html"
}