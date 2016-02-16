demoService.$inject = ['$http', '$q', 'mainConstant'];

function demoService($http, $q, mainConstant) {
    return {
        getStories: getStories
    };

    function getStories() {
        return $http.get(`${mainConstant.endpoint}/sprint`, {})
            .then(getStoriesSuccess, getStoriesFail);

        function getStoriesSuccess(response) {
            return response.data;
        }

        function getStoriesFail(error) {
            console.log(error);
            return $q.reject(error);
        }
    }
}

export default demoService;
