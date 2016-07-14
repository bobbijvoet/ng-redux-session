var initialState = {
};

function todoReducer(state, action) {
    if (typeof state === 'undefined') {
        return initialState;
    }



    switch (action.type) {
        case 'ADD_TODO':
            return {
                id:action.id,
                text:action.text,
                done:false
            };
        case 'TOGGLE_TODO':
            if(state.id !== action.id) {
                return state;
            }
            return {...state, done:true};

        default:
            return state;
    }


}

export {todoReducer};
