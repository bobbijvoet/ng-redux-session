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

    var vm = this;
    vm.onDoneChange = onDoneChange;

    function onDoneChange() {
        if (vm.done) {
            vm.onMarkDone(vm.story);
        }
    }
}
