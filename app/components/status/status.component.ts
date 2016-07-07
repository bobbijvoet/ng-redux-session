import template from './status.html!text'

var StatusComponent = {
    bindings: {
        done: '<',
        burned: '<'
    },
    template: template
};

export {StatusComponent};
