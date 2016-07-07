import template from './stories.html!text'

var StoriesComponent = {
    bindings: {
        stories: '=',
        onStoryDone: '<'
    },
    template: template
};


export {StoriesComponent};
