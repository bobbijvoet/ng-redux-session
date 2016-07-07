StoriesActions.$inject = ['mainService'];

function StoriesActions() {

    return {
        storyDone: storyDone
    };

    function storyDone(story) {
        return function (dispatch, getState) {
            var allOtherStoriesAreDone = getState().stories.stories.reduce(function(otherStoriesDone, currentStory) {
                return otherStoriesDone && (story.id === currentStory.id || currentStory.done);
            }, true);

            var action = {
                type: 'FINISH_STORY',
                payload: {
                    id: story.id,
                    points:story.points
                }
            };

            dispatch(action);

            if (allOtherStoriesAreDone) {
                dispatch({type:'SPRINT_DONE'});
            }
        };
    }
}

export {StoriesActions};
