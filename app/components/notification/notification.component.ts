import template from './notification.html!text';

var NotificationComponent = {
    bindings: {
        message: '='
    },
    controller: NotificationController,
    template: template
};

export {NotificationComponent};

NotificationController.$inject = ['$rootScope', '$timeout'];

function NotificationController($rootScope, $timeout) {
    var vm = this;

    //$rootScope.$on('point', function (event, points) {
    //    vm.message = `${points} points burned!`;
    //    vm.visible = true;
    //
    //});
    //
    //$rootScope.$on('sprint', function (event, sprint) {
    //    vm.message = `Sprint ${sprint} complete!`;
    //});

    //var hideNotification = $timeout
}
