import todoReducer from './todoReducer.ts';


var initialState = {
};

function todosReducer(state, action) {
    if (typeof state === 'undefined') {
        return initialState;
    }

    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todoReducer(undefined, action)

            ];
        case 'TOGGLE_TODO':
            return state.map(t=>{
                todoReducer(t,action)
            });
        default:
            return state;
    }


}

export {todosReducer};
