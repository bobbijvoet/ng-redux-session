import template from './main.html!text';

var MainComponent = {
    controller: MainController,
    template: template
};

export {MainComponent};

MainController.$inject = ['$ngRedux', 'stepsActions', 'addressActions'];

function MainController($ngRedux, stepsActions, addressActions) {
    var vm = this;

    var unsubscribe = $ngRedux.connect(function mapStateToCtrl(state) {
        return {
            steps:state.stepsState.steps,
            currentStep: state.stepsState.currentStep,
            stepIndex: state.stepsState.index,
            fetchedAddress: state.address.address,
            address: state.address
        };
    }, Object.assign({}, addressActions, stepsActions))(vm);

    vm.$onDestroy = unsubscribe;


}
