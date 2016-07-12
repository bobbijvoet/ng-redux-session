import template from './check-address.html!text';

var CheckAddress = {
    template: template,
    bindings: {
        onNextStep: '<',
        address:'<'
    }
};

export {CheckAddress};

