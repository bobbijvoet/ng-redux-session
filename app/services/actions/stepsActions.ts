StepsActions.$inject = [];

function StepsActions() {

    return {
        nextStep: nextStep,
        prevStep: prevStep,
        goToStep: goToStep,
    };

    function nextStep(index) {
        if(index === 1){

        }
        return {
            type: 'NEXT_STEP'
        }
    }

    function prevStep() {
        return {
            type: 'PREV_STEP'
        }
    }

    function goToStep(index) {
        return {
            type: 'SET_STEP',
            payload: {
                step:index
            }
        }
    }



}

export {StepsActions};
