"use strict";
console.log("Server starting");
const Http = require("http");
const Url = require("url");
let port = process.env.PORT;
if (port == undefined)
    port = 8100;
let server = Http.createServer();
server.addListener("listening", handleListen);
server.addListener("request", handleRequest);
server.listen(port);
function handleListen() {
    console.log("Listening on port: " + port);
}
function handleRequest(_request, _response) {
    console.log("Request received");
    console.log(_request.url);
    let query = Url.parse(_request.url, true).query;
    console.log(query);
    let key;
    for (key in query)
        console.log(key + ":" + query[key]);
    _response.setHeader("Access-Control-Allow-Origin", "*");
    _response.setHeader("content-type", "text/html; charset=utf-8");
    //    for (key in query) {
    //        _response.write(key + ":" + query[key]);
    //    }
    _response.write("Vielen Dank f�r Ihre Bestellung!\n\n" + "Bitte pr�fen Sie nocheinmal Ihre Bestellung. Falls diese Fehlerhaft sein sollte wenden Sie sich bitte an unseren Support.\n");
    _response.write("Schokolade: " + query["Schokolade"] + "\n");
    _response.write("Erdbeere: " + query["Erdbeere"] + "\n");
    _response.write("Haselnuss: " + query["Haselnuss"] + "\n");
    _response.write("Vanille: " + query["Vanille"] + "\n");
    _response.write("Banane: " + query["Banane"] + "\n");
    _response.end();
}
//# sourceMappingURL=NodeTest.js.map