import template from './story.html!text'

export default {
    bindings: {
        points: '<',
        description: '<',
        done: '<',
        onMarkDone:'&'
    },

    controller: StoryController,

    template: template
}


function StoryController() {

    var vm = this;
    vm.onDoneChange = onDoneChange;

    function onDoneChange(){
        if(vm.done){
            vm.onMarkDone({points:vm.points})
        }
    }
}
