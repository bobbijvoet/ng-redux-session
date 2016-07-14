import {combineReducers} from 'redux';
import {todoReducer} from "./todoReducer.ts";
import {todosReducer} from "./todosReducer.ts";

rootReducerConfig.$inject = ['$ngReduxProvider'];

function rootReducerConfig($ngReduxProvider) {
    var reducer = combineReducers({
        todoState:todoReducer,
        todosState:todosReducer
    });

    $ngReduxProvider.createStoreWith(reducer, [
        'thunkMiddleware',
        'promiseMiddleware',
        'loggerMiddleware'
    ]);
}

export {rootReducerConfig};
