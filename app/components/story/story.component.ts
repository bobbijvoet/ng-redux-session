import template from './story.html!text'

var StoryComponent = {
    bindings: {
        story: '=',
        onStoryDone: '<'
    },

    template: template
};

export {StoryComponent};


