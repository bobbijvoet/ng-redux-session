import 'angular';
import 'angular-resource';
import 'ng-redux';

import {SprintComponent} from "./components/sprint/sprint.component.ts";
import {StatusComponent} from "./components/status/status.component.ts";
import {StoriesComponent} from "./components/stories/stories.component.ts";
import {StoryComponent} from "./components/story/story.component.ts";
import {MainService} from "./components/main/main.service.ts";
import {MainConstant} from "./components/main/main.constant.ts";
import {rootReducerConfig} from "./services/reducers/rootReducer.ts";
import {SprintsActions} from "./services/actions/sprintsActions.ts";
import {StoriesActions} from "./services/actions/storiesActions.ts";
import {PromiseMiddleware} from "./services/middleware/promiseMiddleware.ts";
import {LoggerMiddleware} from "./services/middleware/loggerMiddleware.ts";
import {ThunkMiddleware} from "./services/middleware/thunkMiddleware.ts";

var app = angular.module('app', ['ngRedux']);

// Components
app.component('sprintStatus', StatusComponent);
app.component('sprint', SprintComponent);
app.component('stories', StoriesComponent);
app.component('story', StoryComponent);

// Services
app.factory('mainService', MainService);

// Actions
app.factory('sprintsActions', SprintsActions);
app.factory('storiesActions', StoriesActions);

// Middleware
app.factory('promiseMiddleware', PromiseMiddleware);
app.factory('loggerMiddleware', LoggerMiddleware);
app.factory('thunkMiddleware', ThunkMiddleware);

// Constants
app.constant('mainConstant', MainConstant);

// Config
app.config(rootReducerConfig);
