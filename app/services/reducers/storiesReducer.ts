var initialState = [];


function storiesReducer(state, action) {
    if (typeof state === 'undefined') {
        return initialState
    }

    switch (action.type) {
        case 'FETCH_SPRINT_FULFILLED':
            state = action.payload.stories;

            break;

        case 'STORY_DONE':
            var story = state.find(function(story) {
               return story.id === action.payload.id;
            });

            if (story) {
                story.done = true;
            }
    }

    return state;
}

export {storiesReducer};
