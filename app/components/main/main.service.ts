MainService.$inject = ['$http', '$q', 'mainConstant'];

function MainService($http, $q, mainConstant) {
    return {
        getStories: getStories
    };

    function getStories() {
        return $q.when({
            stories: [
                {
                    points: 1,
                    description: 'Some lil story',
                    done: false
                },
                {
                    points: 8,
                    description: 'Some bigger story',
                    done: false
                },
                {
                    points: 20,
                    description: 'Some huge story',
                    done: false
                }
            ]
        });
        //return $http.get(`${mainConstant.endpoint}/phones`, {})
        //    .then(getStoriesSuccess, getStoriesFail);
        //
        //function getStoriesSuccess(response) {
        //    return {};
        //}
        //
        //function getStoriesFail(error) {
        //    return $q.reject(error);
        //}
    }
}

export {MainService};
