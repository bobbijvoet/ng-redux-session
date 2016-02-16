demoService.$inject = ['$http', '$q', 'mainConstant'];

function demoService($http, $q, demoConstant) {
    return {
        getPhones: getPhones
    };

    function getPhones() {
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
        //return $http.get(`${demoConstant.endpoint}/phones`, {})
        //    .then(getPhonesSuccess, getPhonesFail);

        function getPhonesSuccess(response) {
            return {};
        }

        function getPhonesFail(error) {
            return $q.reject(error);
        }
    }
}

export default demoService;
