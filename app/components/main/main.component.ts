import template from './main.html!text';

var MainComponent = {
    controller: MainController,
    template: template
};

export {MainComponent};

MainController.$inject = ['mainService'];

function MainController(mainService) {
    var vm = this;

    vm.$onInit = function () {
        vm.stories = mainService.getStories().then(success, fail);
    };

    function success(response) {
        vm.stories = response.stories;
        vm.sprintNumber = response.number;

    }

    function fail(error) {
        vm.error = error;
    }
}
