import template from './stories.html!text'

var StoriesComponent = {
    bindings: {
        stories: '=',
        onMarkDone: '<'
    },
    template: template
};


export {StoriesComponent};
