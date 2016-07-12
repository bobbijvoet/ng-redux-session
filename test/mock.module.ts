import 'sinon';
var json;
var server = sinon.fakeServer.create();
server.xhr.useFilters = true;

server.autoRespond = true;
server.respondImmediately = false;
server.autoRespondAfter = 1000;

server.respondWith('POST', /api.example.com\/address/, function (xhr) {
    var body = JSON.parse(xhr.requestBody);
    if(!body || !body.postalCode || !body.houseNumber) {
        xhr.respond(500, {'Content-Type': 'application/json'});
        return;
    }
    body.street = 'Keizersgracht';
    body.city = 'Amsterdam';
    xhr.respond(200, {'Content-Type': 'application/json'}, JSON.stringify(body));

});

server.xhr.addFilter(function (method, url) {
    return !url.match(/api.example.com/);
});
