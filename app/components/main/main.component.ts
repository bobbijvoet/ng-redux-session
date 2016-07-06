import template from './main.html!text';

var MainComponent = {
    controller: MainController,
    template: template
};

export {MainComponent};

MainController.$inject = ['$ngRedux', 'sprintsActions', 'storiesActions', 'stepsActions', 'addressActions'];

function MainController($ngRedux, sprintsActions, storiesActions, stepsActions, addressActions) {
    var vm = this;

    var unsubscribe = $ngRedux.connect(function mapStateToCtrl(state) {

        return {
            burnedPoints: state.sprint.burnedPoints,
            number: state.sprint.number,
            stories: state.stories.stories,
            currentStep: state.steps.currentStep,
            stepIndex: state.steps.index,
            notification: state.notification.notification,
            fetchedAddress:state.address.address,
            address:state.address

        };
    }, Object.assign({}, sprintsActions, storiesActions, stepsActions, addressActions))(vm);

    vm.$onInit = $onInit;


    function $onInit() {
        vm.getSprint();

    }

    vm.gotoNext = function(){
        if(vm.fetchedAddress) {
            vm.nextStep();
        }
    }


}
