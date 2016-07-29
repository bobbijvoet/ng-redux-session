import {todoReducer} from './todoReducer.ts';

function todosReducer(state = [], action) {

    switch (action.type) {
        case 'ADD_TODO':
            return [...state, todoReducer(undefined, action)];

        case 'TOGGLE_TODO':
            return state.map(t=> {
                return todoReducer(t, action);
            });
        default:
            return state;
    }
}

export {todosReducer};
