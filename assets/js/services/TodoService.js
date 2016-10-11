todoApp.service('TodoService',['$http', '$q', function ($http, $q) {

    return {

        'getTodos': function () {

            var defer = $q.defer();
            $http.get('/todo/getTodos').success(function (resp) {
                defer.resolve(resp);
            }).error(function (err) {
                defer.reject(err);
            });
            return defer.promise;

        }

    }

}]);