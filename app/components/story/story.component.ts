import template from './story.html!text'

var StoryComponent = {
    bindings: {
        points: '<',
        description: '<',
        done: '<',
        onMarkDone: '&'
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
            vm.onMarkDone({points: vm.points})
        }
    }
}
