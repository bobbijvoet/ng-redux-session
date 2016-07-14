import template from './main.html!text';

var MainComponent = {
    controller: MainController,
    template: template
};

export {MainComponent};

MainController.$inject = ['$ngRedux', 'todoActions'];

function MainController($ngRedux, todoActions) {
    var vm = this;

    var unsubscribe = $ngRedux.connect(function mapStateToCtrl(state) {
        return {

        };
    }, Object.assign({}, todoActions))(vm);


    todoActions.addTodo('test');

    vm.$onDestroy = unsubscribe;

}
