var initialState = {
    stories: []
};

function storiesReducer(state, action) {
    if (typeof state === 'undefined') {
        return initialState
    }

    switch (action.type) {
        case 'FETCH_SPRINT_FULFILLED': {
            state.stories = [action.payload.stories];
        }
    }

    return state;
}

export {storiesReducer};
