import template from './header.html!text'

var HeaderComponent = {
    bindings: {
        sprintNumber: '<',
        burned: '<'
    },
    template: template
};

export {HeaderComponent};
