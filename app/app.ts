import 'angular';
import 'angular-resource';

import {HeaderComponent} from "./components/header/header.component.ts";
import {MainComponent} from "./components/main/main.component.ts";
import {MainService} from "./components/main/main.service.ts";
import {MainConstant} from "./components/main/main.constant.ts";
import {StoryComponent} from "./components/story/story.component.ts";
import {StoryPointsComponent} from "./components/story/storyPoints.component.ts";

var app = angular.module('app', []);

// Components
app.component('headerComponent', HeaderComponent);
app.component('mainComponent', MainComponent);
app.component('story', StoryComponent);
app.component('storyPoints', StoryPointsComponent);

// Services
app.factory('mainService', MainService);

// Constants
app.constant('mainConstant', MainConstant);

