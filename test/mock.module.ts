import 'sinon';
import json from '../test/mocks/sprint/ok.json!text';

var server = sinon.fakeServer.create();
server.xhr.useFilters = true;

server.autoRespond = true;
server.autoRespondAfter = 500;

server.respondWith('GET', /api.example.com/, function (xhr, id) {
    xhr.respond(200, {'Content-Type': 'application/json'}, json);
});

server.xhr.addFilter(function (method, url) {
    return !url.match(/api.example.com/);
});
