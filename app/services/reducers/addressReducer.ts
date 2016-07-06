var initialState = {
};

function addressReducer(state, action) {
    if (typeof state === 'undefined') {
        return initialState;
    }

    switch (action.type) {
        case 'FETCH_ADDRESS_PENDING':

            state.stories = {};
            state.loading = true;
            break;
        case 'FETCH_ADDRESS_FULFILLED':
            state.loading = false;
            state.error = false;
            return Object.assign({}, state, {
                address: action.payload
            });
            break;
        case 'FETCH_ADDRESS_REJECTED':
            state.loading = false;
            state.error = true;

            break;
    }

    return state;

}

export {addressReducer};
