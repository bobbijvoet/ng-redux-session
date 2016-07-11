function StoriesActions() {

    return {
        storyDone: storyDone
    };

    function storyDone(story) {
        return function (dispatch, getState) {
            var allOtherStoriesAreDone = getState().stories.reduce(function(prevStoryDone, currentStory) {
                return prevStoryDone && (story.id === currentStory.id || currentStory.done);
            }, true);

            var action = {
                type: 'STORY_DONE',
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
