import template from './sprint.html!text'

var SprintComponent = {
    bindings: {
        number: '<',
        burned: '<',
        stories: '=',
        onMarkDone: '<'
    },
    template: template
};


export {SprintComponent};
