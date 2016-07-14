MainService.$inject = ['$http', '$q', 'mainConstant'];

function MainService($http, $q, mainConstant) {
    return {
        fetchAddress:fetchAddress
    };

    function fetchAddress(address) {
        return $http.post(`${mainConstant.endpoint}/address`, address)
            .then(fetchAddressSuccess, fetchAddressFail);

        function fetchAddressSuccess(response) {
            return response.data;
        }

        function fetchAddressFail(error) {
            return $q.reject(error);
        }
    }

}

export {MainService};
