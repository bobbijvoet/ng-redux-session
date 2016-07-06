import template from './enter-address.html!text';

var EnterAddress = {
    controller: EnterAddressCtrl,
    template: template
};

export {EnterAddress};

EnterAddressCtrl.$inject = ['$ngRedux', 'stepsActions', 'addressActions'];

function EnterAddressCtrl($ngRedux, stepsActions, addressActions) {
    var vm = this;

    var unsubscribe = $ngRedux.connect(function mapStateToCtrl(state) {
        return {
            currentStep: state.steps.currentStep,
            stepIndex: state.steps.index,
            fetchedAddress:state.address.address,
            address:state.address
        };
    }, Object.assign({}, stepsActions, addressActions))(vm);

    //Destroy

    vm.gotoNext = function(){
        if(vm.fetchedAddress) {
            vm.nextStep();
        }
    }
}
