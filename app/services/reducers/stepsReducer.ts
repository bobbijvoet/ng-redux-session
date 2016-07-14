



var initialState = {
    steps: [
        {
            name: 'Something'
        },
        {
            name: 'Controleren'
        },
        {
            name: 'Adres gewijzigd'
        }
    ],
    index: 0,
    currentStep: {}
};

initialState.currentStep = initialState.steps[0];

function stepsReducer(state, action) {
    if (typeof state === 'undefined') {
        return initialState;
    }

    switch (action.type) {
        case 'NEXT_STEP':
            state.index++;
            break;
        case 'PREV_STEP':
            state.index--;
            break;
        case 'GOTO_STEP':
            state.index = action.payload.step;

            break;
    }

    return state;
}

export {stepsReducer};
