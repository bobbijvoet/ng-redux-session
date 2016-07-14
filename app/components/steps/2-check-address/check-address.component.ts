import template from './check-address.html!text';

var CheckAddress = {
    template: template,
    bindings: {
        onNextStep: '<',
        onChangeAddress: '<',
        address:'<'
    }
};

export {CheckAddress};

