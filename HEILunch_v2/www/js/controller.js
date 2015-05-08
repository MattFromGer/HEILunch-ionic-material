/**
 * Created by mstrauss on 22.04.2015.
 */

(function(){
    'use strict';


var foodControllers = angular.module('foodModule');


        foodControllers.controller('FoodController', ['Food', function(Food) {

            /*
            console.log('Try to connect');
            Food.query(function(data){
                console.log('Data-Log: ' + data[0].Description);
                //$scope.name = data.name;
            });*/

            var self = this;

            console.log('Try to connect to backend server....');
            Food.all()
                .success(
                function (data) {
                    console.log('SERVER SUCCESS ');
                    self.foods = data;
                })
                .error(function(data, status){
                    console.log('Error connecting to backend :( ' + data + ' ' + status);
                });


/*
            Food.single(1)
                .success(
                function (data) {
                    console.log('SINGLE SERVER SUCCESS ' + JSON.stringify(data));
                    $scope.foodSingle = data;
                })
                .error(function(data, status){
                    console.log('Single Error connecting to backend :( ' + JSON.stringify(data) + ' ' + status);
                });*/
/*
            $scope.getSingleFood = function(id){
                Food.single(id)
                    .success(
                    function (data) {
                        console.log('SINGLE SERVER SUCCESS ' + JSON.stringify(data));
                        $scope.foodSingle = data;
                    })
                    .error(function(data, status){
                        console.log('Single Error connecting to backend :( ' + JSON.stringify(data) + ' ' + status);
            });
            }*/
}]);

})();

