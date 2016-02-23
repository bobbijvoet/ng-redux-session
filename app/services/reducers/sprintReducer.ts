var initialState = {
    number: 0,
    burnedPoints: 0
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
    }

    return state;
}

export {sprintReducer};
