import 'sinon';
import json from './mocks/data.json'

var server = sinon.fakeServer.create();
server.xhr.useFilters = true;


server.autoRespond = true;
server.respondImmediately = false;
server.autoRespondAfter = 1000;

server.respondWith('GET', /api.example.com\/data/, function (xhr) {


});

server.xhr.addFilter(function (method, url) {
    return !url.match(/api.example.com/);
});
