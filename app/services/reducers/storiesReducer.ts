var initialState = {
    stories: []
};

function storiesReducer(state, action) {
    if (typeof state === 'undefined') {
        return initialState;
    }

    switch (action.type) {
        case 'FETCH_SPRINT_PENDING':

            state.stories = [];
            break;
        case 'FETCH_SPRINT_FULFILLED':
            return Object.assign({}, state, {
                stories: action.payload.stories
            });

            break;

        case 'FINISH_STORY':
            var story = state.stories.find(function (story) {
                return story.id === action.payload.id;
            });

            story.done = true;

    }


    return state;

}

export {storiesReducer};
