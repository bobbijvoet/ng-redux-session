import mainConstant from './main.constant.ts';
import mainComponent from './main.component.ts';
import mainService from './main.service.ts'


angular
    .module('app.main', [])
    .component('mainComponent', mainComponent)
    .factory('mainService', mainService)
    .constant('mainConstant', mainConstant);

