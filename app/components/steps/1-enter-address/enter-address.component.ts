import template from './enter-address.html!text';

var EnterAddress = {
    controller: EnterAddressCtrl,
    template: template,
    bindings: {
        onNextClick: '<'
    }
};

export {EnterAddress};

EnterAddressCtrl.$inject = ['$ngRedux', 'addressActions'];

function EnterAddressCtrl($ngRedux, addressActions) {
    var vm = this;

    var unsubscribe = $ngRedux.connect(function mapStateToCtrl(state) {
        return {
            fetchedAddress:state.address.address,
            address:state.address
        };
    }, Object.assign({}, addressActions))(vm);

    //Destroy

    vm.gotoNext = function(){
        if(vm.fetchedAddress) {
            vm.onNextClick();
        }
    }
}
