import 'sinon';
import address from '../test/mocks/address/ok.json!text';
import sprint from '../test/mocks/sprint/ok.json!text';
var json;
var server = sinon.fakeServer.create();
server.xhr.useFilters = true;

server.autoRespond = true;
server.respondImmediately = false;
server.autoRespondAfter = 1000;

server.respondWith('POST', /api.example.com\/address/, function (xhr, id) {
    var body = JSON.parse(xhr.requestBody);
    if(!body || !body.postalCode || !body.houseNumber) {
        xhr.respond(500, {'Content-Type': 'application/json'});
        return;
    }
    body.street = 'Keizersgracht';
    body.city = 'Amsterdam';
    xhr.respond(200, {'Content-Type': 'application/json'}, JSON.stringify(body));

});

server.respondWith('GET', /api.example.com\/sprint/, function (xhr, id) {
    console.log(xhr);
    xhr.respond(200, {'Content-Type': 'application/json'}, sprint);
});

server.xhr.addFilter(function (method, url) {
    return !url.match(/api.example.com/);
});
//
//server.xhr.onCreate = function (xhr) {
//    xhr.async = false;
//
//    System.import('../test/mocks/sprint/ok.json!text').then(function (data) {
//        json = data;
//    });
//    server.addRequest(xhr);
//};
