var initialState = {
    stories: []
};

function storiesReducer(state, action) {
    if (typeof state === 'undefined') {
        return initialState
    }

    switch (action.type) {
        case 'FETCH_SPRINT_FULFILLED':
            state.stories = action.payload.stories;

            break;

        case 'FINISH_STORY':
            var story = state.stories.filter(function(story) {
               return story.id === action.payload.id;
            });

            if (story[0]) {
                story[0].done = true;
            }
    }

    return state;
}

export {storiesReducer};
