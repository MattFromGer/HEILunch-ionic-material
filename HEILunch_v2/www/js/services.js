/**
 * Created by mstrauss on 22.04.2015.
 */
var myFoodServices = angular.module('myFoodServices', ['ngResource']);

myFoodServices.factory('Food', ['$resource',
    function($resource){
        return $resource('http://localhost:50754/api/FoodPlans', {}, {
            query: {method:'GET', isArray:true}
        });
    }]);