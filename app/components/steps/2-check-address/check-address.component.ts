import template from './check-address.html!text';

var CheckAddress = {
    controller: CheckAddressCtrl,
    template: template,
    bindings: {
        onNextClick: '<',
        address:'<'
    }
};

export {CheckAddress};

CheckAddressCtrl.$inject = [];

function CheckAddressCtrl() {
    var vm = this;


    vm.gotoNext = function () {
        vm.onNextClick();
    }
}
