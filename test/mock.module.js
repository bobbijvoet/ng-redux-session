
(function () {
    'use strict';

    angular.module('mockedStarter', [
        'starter',
        'ngMockE2E'
    ]).run(configureMocks);

    function configureMocks($httpBackend, $rootScope, $window) {

        $httpBackend.whenGET(/\D+(\.(html))$/).passThrough();

        $httpBackend.whenGET('/phones').respond(function (method, url, data) {
            var request = new XMLHttpRequest();

            request.open('GET', '/test/mocks/phones/ok.json', false);
            request.send(null);

            return [request.status, request.response, {}];
        });
    }

})();
