import template from './enter-address.html!text';

var EnterAddress = {
    controller: EnterAddressCtrl,
    template: template,
    bindings: {
        onNextStep: '<'
    }
};

export {EnterAddress};

EnterAddressCtrl.$inject = ['$ngRedux', 'addressActions'];

function EnterAddressCtrl($ngRedux, addressActions) {
    var vm = this;

    var unsubscribe = $ngRedux.connect(function mapStateToCtrl(state) {
        return {
            fetchedAddress: state.address.address,
            address: state.address
        };
    }, Object.assign({}, addressActions))(vm);

    vm.$onDestroy = unsubscribe;

}
