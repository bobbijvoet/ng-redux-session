import template from './status.html!text'

var StatusComponent = {
    bindings: {
        sprintNumber: '<',
        burned: '<'
    },
    template: template
};

export {StatusComponent};
