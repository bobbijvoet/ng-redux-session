import 'angular';
import 'angular-resource';
import 'ng-redux';
import { createStore, applyMiddleware, compose } from 'redux';


import {HeaderComponent} from "./components/header/header.component.ts";
import {MainComponent} from "./components/main/main.component.ts";
import {MainService} from "./components/main/main.service.ts";
import {MainConstant} from "./components/main/main.constant.ts";
import {StoryComponent} from "./components/story/story.component.ts";
import {rootReducerConfig} from "./config/rootReducer.ts";
import {NotificationComponent} from "./components/notification/notification.component.ts";
import {SprintComponent} from "./components/sprint/sprint.component.ts";

var app = angular.module('app', ['ngRedux']);

function counter(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state
    }
}

let store = createStore(counter);

store.subscribe(() =>
    console.log(store.getState())
);

store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'DECREMENT'});

// Components
app.component('headerComponent', HeaderComponent);
app.component('notificationComponent', NotificationComponent);
app.component('mainComponent', MainComponent);
app.component('sprint', SprintComponent);
app.component('story', StoryComponent);

// Services
app.factory('mainService', MainService);

// Constants
app.constant('mainConstant', MainConstant);

// Config
app.config(rootReducerConfig);
