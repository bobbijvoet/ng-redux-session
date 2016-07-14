import 'angular';
import 'angular-resource';
import 'ng-redux';

import {MainComponent} from "./components/main/main.component.ts";

import {MainConstant} from "./components/main/main.constant.ts";

import {MainService} from "./components/main/main.service.ts";

import {AddressActions} from "./services/actions/addressActions.ts";

import {PromiseMiddleware} from "./services/middleware/promiseMiddleware.ts";
import {LoggerMiddleware} from "./services/middleware/loggerMiddleware.ts";
import {ThunkMiddleware} from "./services/middleware/thunkMiddleware.ts";

import {rootReducerConfig} from "./services/reducers/rootReducer.ts";

var app = angular.module('app', ['ngRedux']);

// Components
app.component('mainComponent', MainComponent);

// Services
app.factory('mainService', MainService);

// Actions
app.factory('addressActions', AddressActions);

// Middleware
app.factory('promiseMiddleware', PromiseMiddleware);
app.factory('loggerMiddleware', LoggerMiddleware);
app.factory('thunkMiddleware', ThunkMiddleware);

// Constants
app.constant('mainConstant', MainConstant);

// Config
app.config(rootReducerConfig);
