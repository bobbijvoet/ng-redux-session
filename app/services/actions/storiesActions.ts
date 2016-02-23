
function StoriesActions() {

    return {
        finishStory: finishStory
    };

    function finishStory() {
        return {
            type: 'FINISH_STORY'
        }
    }
}

export {StoriesActions};
