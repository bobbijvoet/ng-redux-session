StoriesActions.$inject = ['mainService'];

function StoriesActions(mainService) {

    return {
        finishStory: finishStory
    };

    function finishStory(story) {
        return function (dispatch, getState) {
            var allOtherStoriesAreDone = getState().stories.stories.reduce(function(allOtherStoriesAreDone, currentStory) {
                return allOtherStoriesAreDone && (story.id === currentStory.id || currentStory.done);
            }, true);

            var action = {
                type: 'FINISH_STORY',
                payload: {
                    id: story.id
                }
            };

            if (allOtherStoriesAreDone) {
                action.payload.notification = 'Sprint completed!';
            }     else {
                action.payload.notification = 'Stories burned: ' + story.points;
            }

            dispatch(action);
        };
    }
}

export {StoriesActions};
