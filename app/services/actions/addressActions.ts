AddressActions.$inject = ['mainService'];

function AddressActions(mainService) {

    return {
        fetchAddress: fetchAddress
    };

    function fetchAddress(address) {
        return {
            type: 'FETCH_ADDRESS',
            payload: {
                promise: mainService.fetchAddress(address)
            }
        }
    }

}

export {AddressActions};
