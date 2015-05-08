/**
 * Created by mstrauss on 22.04.2015.
 */

(function(){
    'use strict';

    angular.module('foodModule')
        .factory('Food', ['$http',
            function ($http) {
                return {
                    all: function () {
                        return $http.get('http://localhost:50754/api/FoodPlans/');
                    },
                    single: function (id) {
                        return $http.get('http://localhost:50754/api/FoodPlans/' + id)
                    },
                    put: function (food) {
                        return $http.put('http://localhost:50754/api/FoodPlans' + food.id, food);
                    },
                    remove: function (id) {
                        return $http.delete('http://localhost:50754/api/FoodPlans' + id);
                    },
                    post: function (food) {
                        return $http.post('http://localhost:50754/api/FoodPlans', food);
                    }
                };
            }]);
})();


/**
 * ng-Resource method
 */
/*
 (function(){
 'use strict';

 angular.module('foodModule').factory('Food',
    function($resource){
        return $resource('http://localhost:50754/api/FoodPlans', {}, { //http://localhost:50754/api/FoodPlans
                    query: {method: 'GET', isArray: true}
                });
            })
 })();*/
