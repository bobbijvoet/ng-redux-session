StoriesActions.$inject = ['mainService'];

function StoriesActions(mainService) {

    return {
        finishStory: finishStory
    };

    function finishStory(story) {
        return {
            type: 'FINISH_STORY',
            payload: story.id
        }
    }
}

export {StoriesActions};
