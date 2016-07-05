import 'sinon';
import json from '../test/mocks/sprint/ok.json!text';
var json;
var server = sinon.fakeServer.create();
server.xhr.useFilters = true;

server.autoRespond = true;
server.respondImmediately = false;
server.autoRespondAfter = 0;

server.respondWith('GET', /api.example.com/, function (xhr, id) {
    xhr.respond(200, {'Content-Type': 'application/json'}, json);
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
