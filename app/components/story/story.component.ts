import template from './story.html!text'

var StoryComponent = {
    bindings: {
        story: '=',
        onMarkDone: '<'
    },

    controller: StoryController,

    template: template
};

export {StoryComponent};

function StoryController() {


}
