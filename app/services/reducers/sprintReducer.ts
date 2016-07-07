var initialState = {
    number: 0,
    burnedPoints: 0,
    done:false
};

function sprintReducer(state, action) {
    if (typeof state === 'undefined') {
        return initialState
    }

    switch (action.type) {
        case 'FETCH_SPRINT_FULFILLED':
            state.number = action.payload.number;
            break;
        case 'FINISH_STORY':
            state.burnedPoints += action.payload.points;

            break;
        case 'SPRINT_DONE':
            state.done = true;

    }

    return state;
}

export {sprintReducer};
