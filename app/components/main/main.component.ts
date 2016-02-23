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
            burnedPoints: state.sprint.burnedPoints,
            number: state.sprint.number,
            stories: state.stories.stories,
            notification: state.notification.notification
        };
    }, Object.assign({}, sprintsActions, storiesActions))(vm);

    vm.$onInit = $onInit;

    function $onInit() {
        vm.getSprint();
    }

}
