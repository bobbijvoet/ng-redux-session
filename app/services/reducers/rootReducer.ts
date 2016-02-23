import {combineReducers} from 'redux';
import {storiesReducer} from "./storiesReducer.ts";
import {sprintsReducer} from "./sprintsReducer.ts";
import {notificationReducer} from "./notificationReducer.ts";

rootReducerConfig.$inject = ['$ngReduxProvider'];

function rootReducerConfig($ngReduxProvider) {
    var reducer = combineReducers({
        stories: storiesReducer,
        sprint: sprintsReducer,
        notification: notificationReducer
    });

    $ngReduxProvider.createStoreWith(reducer, [
        'thunkMiddleware',
        'promiseMiddleware',
        'loggerMiddleware'
    ]);
}

export {rootReducerConfig};
