SprintsActions.$inject = ['mainService'];

function SprintsActions(mainService) {

    return {
        fetchSprint: fetchSprint
    };

    function fetchSprint() {
        return {
            type: 'FETCH_SPRINT',
            payload: {
                promise: mainService.getSprint()
            }
        }
    }

}

export {SprintsActions};
