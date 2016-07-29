function todoReducer(state = {}, action) {
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
            return Object.assign({}, state, {
                done: !state.done
            });

        default:
            return state;
    }
}

export {todoReducer};
