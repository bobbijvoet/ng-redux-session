var initialState = {
    steps: [
        {
            name: 'Invoeren'
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
            break;
        case 'PREV_STEP':
            state.index--;
            break;
        case 'GOTO_STEP':
            break;
    }

    return state;
}

export {stepsReducer};
