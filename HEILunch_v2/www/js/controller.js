/**
 * Created by mstrauss on 22.04.2015.
 */

(function(){
    'use strict';


var foodControllers = angular.module('foodModule');


        foodControllers.controller('FoodController', ['$scope', 'Food', '$log', function($scope, Food) {

            console.log('Try to connect to backend server....');
            Food.all()
                .success(
                function (allFoods) {
                    console.log('SERVER SUCCESS');
                    $scope.foods = allFoods;
                })
                .error(function(data, status){
                    console.log('Error connecting to backend :( ' + data + ' ' + status);
                });
}]);

})();

