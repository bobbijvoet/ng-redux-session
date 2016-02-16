import template from './sprint.html!text'

var SprintComponent = {
    bindings: {
        number: '<',
        stories: '<'
    },
    controller: SprintController,
    template: template
};


SprintController.$inject = ['$rootScope'];

function SprintController($rootScope) {
    var vm = this;
    vm.burned = 0;

    vm.addBurnedPoints = addBurnedPoints;

    function addBurnedPoints(value) {
        vm.burned += value.points;

        $rootScope.$emit('point', value.points);

        var totalPoints = vm.stories.reduce(function (prev, cur) {
            return prev + cur.points
        }, 0);

        if (vm.burned === totalPoints) {
            $rootScope.$emit('sprint', vm.number);
        }
    }
}


export {SprintComponent};
