var initialState = {
    steps: [
        {
            name: 'stap1',
            template: 'app/templates/tpl.html'
        },
        {
            name: 'Controleren',
            template: 'app/templates/tpl2.html'
        },
        {
            name: 'Adres gewijzigd',
            template: 'template'
        }
    ],
    index: 0,
    currentStep: {}
};

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

    state.currentStep = state.steps.find(function (step, index) {
        return index === state.index;
    });



    return state;
}

export {stepsReducer};
