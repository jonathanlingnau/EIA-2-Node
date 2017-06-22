//Aufgabe: 10
//Name: Jonathan Lingnau
//Matrikel: 255645
//Datum: 21.06.17
//    
//Hiermit versichere ich, dass ich diesen Code selbst und in Zusammenarbeit mit Leonie Storz geschrieben habe. 
//Er wurde nicht kopiert und auch nicht diktiert.
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
    _response.setHeader("Access-Control-Allow-Origin", "*");
    _response.setHeader("content-type", "text/html; charset=utf-8");
    let key;
    for (key in query)
        console.log(key + ":" + query[key]);
    _response.write("Vielen Dank für Ihre Bestellung!" + "<br>" + "Bitte prüfen Sie noch einmal Ihre Bestellung. Falls diese Fehlerhaft sein sollte wenden Sie sich bitte an unseren Support.<br><br>");
    _response.write("<br>" + "Eissorten:" + "<br><br>");
    _response.write("Vanille: " + query["Vanille"] + "<br>");
    _response.write("Schokolade: " + query["Schokolade"] + "<br>");
    _response.write("Erdbeere: " + query["Erdbeere"] + "<br>");
    _response.write("Himbeere: " + query["Himbeere"] + "<br>");
    _response.write("Zitrone: " + query["Zitrone"] + "<br>");
    _response.write("Banane: " + query["Banane"] + "<br>");
    _response.write("Mocca: " + query["Mocca"] + "<br>");
    _response.write("Cookies: " + query["Cookies"] + "<br>");
    _response.write("Mango: " + query["Mango"] + "<br>");
    _response.write("Haselnuss: " + query["Haselnuss"] + "<br>");
    _response.write("Straciatella: " + query["Straciatella"] + "<br>");
    _response.write("Nougat: " + query["Nougat"] + "<br>");
    _response.write("Kirsche: " + query["Kirsche"] + "<br>");
    _response.write("Joghurt: " + query["Joghurt"] + "<br>");
    _response.write("Pistazie: " + query["Pistazie"] + "<br>");
    _response.write("<br>" + "Toppings:" + "<br><br>");
    if (query["Sahne"] != undefined)
        _response.write("Sahne<br>");
    if (query["Schokostreusel"] != undefined)
        _response.write("Schokostreusel<br>");
    if (query["Bunte Zuckerstreusel"] != undefined)
        _response.write("Bunte Zuckerstreusel<br>");
    if (query["Erdbeersoße"] != undefined)
        _response.write("Erdbeersoße<br>");
    if (query["Schokosoße"] != undefined)
        _response.write("Schokosoße<br>");
    _response.write("<br>" + "Als Behälter haben Sie gewählt:" + "<br><br>" + query["behaelter"] + "<br>");
    _response.write("<br>" + "Lieferanschrift: " + "<br><br>");
    _response.write("Vorname: " + query["Vorname"] + "<br>");
    _response.write("Nachname: " + query["Nachname"] + "<br>");
    _response.write("Straße + Hausnummer: " + query["Adresse"] + "<br>");
    _response.write("Postleitzahl: " + query["plz"] + "<br>");
    _response.write("Stadt: " + query["Stadt"] + "<br>");
    _response.write("E-Mail: " + query["Mail"] + "<br>");
    _response.write("Anmerkungen: " + query["Anmerkungen"] + "<br>");
    _response.write("<br>" + "Ihre Bestellung wird versand als: " + query["Versandart"] + "<br>");
    _response.end();
}
//# sourceMappingURL=NodeTest.js.map