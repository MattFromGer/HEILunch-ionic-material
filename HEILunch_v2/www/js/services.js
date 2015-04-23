/**
 * Created by mstrauss on 22.04.2015.
 */
var myFoodServices = angular.module('food.service', []);

myFoodServices.factory('Food', ['$http',
    function ($http) {
        return {
            all: function () {
                return $http.get('http://localhost:50754/api/FoodPlans');
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


/*
myFoodServices.factory('Food', ['$resource',
    function($resource){
        return $resource('http://localhost:50754/api/FoodPlans', {}, {
            query: {method:'GET', isArray:true}
        });
    }]);*/