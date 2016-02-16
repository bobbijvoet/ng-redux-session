import StoryComponent from './story.component.ts';
import StoryPointsComponent from './storyPoints.component.ts';


angular
    .module('app')
    .component('story', StoryComponent)
    .component('storyPoints', StoryPointsComponent);

