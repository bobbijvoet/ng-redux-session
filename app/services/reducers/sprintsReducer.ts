var initialState = {
    sprints: []
};

function sprintsReducer(state, action) {
    if (typeof state === 'undefined') {
        return initialState
    }

    switch (action.type) {
        case 'FETCH_SPRINT_FULFILLED':
            state.sprints = [action.payload];

            break;
    }

    return state;
}

export {sprintsReducer};
