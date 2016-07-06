import template from './check-address.html!text';

var CheckAddress = {
    controller: CheckAddressCtrl,
    template: template
};

export {CheckAddress};

CheckAddressCtrl.$inject = ['$ngRedux', 'addressActions'];

function CheckAddressCtrl($ngRedux, addressActions) {
    var vm = this;

    var unsubscribe = $ngRedux.connect(function mapStateToCtrl(state) {
        return {
            fetchedAddress: state.address.address
        };
    }, Object.assign({}, addressActions))(vm);

    //Destroy

    vm.gotoNext = function () {
        vm.nextStep();
    }
}
