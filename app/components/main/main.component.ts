import template from './main.html!text';

var MainComponent = {
    bindings: {
        count: '='
    },
    controller: MainController,
    template: template
};

export {MainComponent};

MainController.$inject = ['$rootScope', 'mainService'];

function MainController($rootScope, mainService) {
    var vm = this;
    vm.sprintNumber = 1;
    vm.burned = 0;

    vm.submitStory = submitStory;
    vm.addBurnedPoints = addBurnedPoints;

    vm.$onInit = function () {
        vm.stories = mainService.getStories().then(success, fail);
        vm.story = {
            points: 3
        };
    };

    function success(response) {
        vm.stories = response.stories;
    }

    function fail(error) {
        vm.error = error;
    }

    function submitStory() {
        vm.stories.push({
            description: vm.story.description,
            points: vm.story.points,
            done: false
        });

        vm.story = {
            points: 3
        };
    }

    function addBurnedPoints(value) {
        vm.burned += value.points;

        $rootScope.$emit('point', value.points);

        var totalPoints = vm.stories.reduce(function (prev, cur) {
            return prev + cur.points
        }, 0);

        if (vm.burned === totalPoints) {
            $rootScope.$emit('sprint', vm.sprintNumber);
        }


    }

}
