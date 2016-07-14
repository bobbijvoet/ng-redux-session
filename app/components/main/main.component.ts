import template from './main.html!text';

var MainComponent = {
    controller: MainController,
    template: template
};

export {MainComponent};

MainController.$inject = ['$ngRedux', 'addressActions'];

function MainController($ngRedux, addressActions) {
    var vm = this;

    var unsubscribe = $ngRedux.connect(function mapStateToCtrl(state) {
        return {
        };
    }, Object.assign({}, addressActions))(vm);

    vm.$onDestroy = unsubscribe;

}
