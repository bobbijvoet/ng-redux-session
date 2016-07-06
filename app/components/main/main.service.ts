MainService.$inject = ['$http', '$q', 'mainConstant'];

function MainService($http, $q, mainConstant) {
    return {
        getSprint: getSprint,
        fetchAddress:fetchAddress
    };

    function getSprint() {
        return $http.get(`${mainConstant.endpoint}/sprint`, {})
            .then(getStoriesSuccess, getStoriesFail);

        function getStoriesSuccess(response) {
            return response.data;
        }

        function getStoriesFail(error) {
            return $q.reject(error);
        }
    }

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
