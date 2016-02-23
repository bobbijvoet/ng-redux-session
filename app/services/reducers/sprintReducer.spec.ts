import {sprintsReducer} from "./sprintsReducer.ts";

describe('given the sprint reducer', function () {

    describe('when initializing', function () {
        var state = sprintsReducer(undefined,undefined);

        it('should return the initial state', function () {
            expect(state).toEqual({sprints: []});
        });
    });

    describe('when fetched a sprint', function () {
        var state = sprintsReducer({}, {type: 'FETCH_SPRINT_FULFILLED', payload: ['a', 'b', 'c']});

        it('should populate the sprint array', function () {
            expect(state).toEqual({sprints: [['a', 'b', 'c']]});
        });
    });

});
