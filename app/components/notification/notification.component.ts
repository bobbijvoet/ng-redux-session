import template from './notification.html!text';

var NotificationComponent = {
    bindings: {},
    controller: NotificationController,
    template: template
};

export {NotificationComponent};

NotificationController.$inject = ['$rootScope'];

function NotificationController($rootScope) {
    var vm = this;

    $rootScope.$on('point', function (event, points) {
        vm.message = `${points} points burned!`;
    });

    $rootScope.$on('sprint', function (event, sprint) {
        vm.message = `Sprint ${sprint} complete!`;
    });
}
