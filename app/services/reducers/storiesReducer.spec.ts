import {storiesReducer} from "./storiesReducer.ts";
import {usingStates} from "../../../test/karma-extensions/usingStates.ts";

describe('given the stories reducer', function () {

    usingStates(storiesReducer, [
        [
            undefined,
            [{}],
            {stories: []}
        ],
        [
            {},
            [{type: 'FETCH_SPRINT_FULFILLED', payload: {stories: [{foo: 'bar'}]}}],
            {stories: [{foo: 'bar'}]}
        ],
        [
            {stories: [{id: "1"}]},
            [{type: 'FINISH_STORY', payload: {id: "1"}}],
            {stories: [{id: "1"}]}
        ]
    ]);

});
