MainService.$inject = ['$http', '$q', 'mainConstant'];

function MainService($http, $q, mainConstant) {
    return {
        getSprint: getSprint
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
}

export {MainService};
