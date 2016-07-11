import {sprintReducer} from "./sprintReducer.ts";

describe('given the sprint reducer', function () {

    var state = sprintReducer(undefined, undefined);

    describe('when initializing', function () {
        it('should set the initial state', function () {
            expect(state.burnedPoints).toEqual(0);
        });
    });

    describe('when story done', function () {
        beforeEach(function () {
            var action = {
                type: 'STORY_DONE',
                payload: {
                    points: 5
                }
            };
            state = sprintReducer(state, action);
        });

        it('should set burned points', function () {
            expect(state.burnedPoints).toEqual(5);
        });

    });


});
