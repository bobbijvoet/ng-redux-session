import {combineReducers} from 'redux';
import {todosReducer} from "./todosReducer.ts";
import {visibilityReducer} from "./visibilityReducer.ts";

rootReducerConfig.$inject = ['$ngReduxProvider'];

function rootReducerConfig($ngReduxProvider) {
    var reducer = combineReducers({
        todosState:todosReducer,
        visibilityState:visibilityReducer

    });

    $ngReduxProvider.createStoreWith(reducer, [
        'thunkMiddleware',
        'promiseMiddleware',
        'loggerMiddleware'
    ]);
}

export {rootReducerConfig};
