var initialState = {
    notification: ''
};

function notificationReducer(state, action) {
    if (typeof state === 'undefined') {
        return initialState
    }

    switch (action.type) {
        case 'FINISH_STORY':
            state.notification = action.payload.notification;

            break;
    }

    return state;
}

export {notificationReducer};
