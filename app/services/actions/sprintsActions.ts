SprintsActions.$inject = ['mainService'];

function SprintsActions(mainService) {

    return {
        getSprint: getSprint
    };

    function getSprint() {
        return {
            type: 'FETCH_SPRINT',
            payload: {
                promise: mainService.getSprint()
            }
        }
    }

}

export {SprintsActions};
