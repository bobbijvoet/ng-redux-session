import template from './main.html!text';

var MainComponent = {
    controller: MainController,
    template: template
};

export {MainComponent};

MainController.$inject = ['$ngRedux', 'sprintsActions', 'storiesActions'];

function MainController($ngRedux, sprintsActions, storiesActions) {
    var vm = this;

    var unsubscribe = $ngRedux.connect(function mapStateToCtrl(state) {
        return {
            stories: state.stories.stories,
            notification: state.notification.notification
        };
    }, angular.merge({}, sprintsActions, storiesActions))(vm);

    vm.$onInit = $onInit;

    function $onInit() {
        vm.getSprint();
    }

    //function success(response) {
    //    vm.stories = response.stories;
    //    vm.sprintNumber = response.number;
    //
    //}
    //
    //function fail(error) {
    //    vm.error = error;
    //}
}
