var initialState = {
};

function addressReducer(state, action) {
    if (typeof state === 'undefined') {
        return initialState;
    }

    switch (action.type) {
        case 'FETCH_ADDRESS_PENDING':
            break;
        case 'FETCH_ADDRESS_FULFILLED':
            break;
        case 'FETCH_ADDRESS_REJECTED':
            break;
    }

    return state;

}

export {addressReducer};
