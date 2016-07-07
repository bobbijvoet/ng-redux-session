import template from './sprint.html!text';

var SprintComponent = {
    controller: SprintCtrl,
    template: template
};

export {SprintComponent};

SprintCtrl.$inject = ['$ngRedux', 'sprintsActions', 'storiesActions'];

function SprintCtrl($ngRedux, sprintsActions, storiesActions) {
    var vm = this;

    var unsubscribe = $ngRedux.connect(function mapStateToCtrl(state) {
        return {
            burnedPoints: state.sprint.burnedPoints,
            sprintDone: state.sprint.done,
            sprintNumber: state.sprint.number,
            stories: state.stories.stories
        };
    }, Object.assign({}, sprintsActions, storiesActions))(vm);

    vm.$onInit = $onInit;

    function $onInit() {
        vm.getSprint();
    }

}
