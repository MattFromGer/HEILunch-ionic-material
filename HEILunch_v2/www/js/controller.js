/**
 * Created by mstrauss on 22.04.2015.
 */
/*
    var nameSpace = angular.module('users');

nameSpace.controller("GetFoodPlan", ['$scope', '$http', function($scope, $http) {
        console.log('Try to connect to backend server....');
        $http.get('http://localhost:50754/api/FoodPlans')
            .success(function(data){
                console.log('SERVER SUCCESS');
            $scope.myFoodVariable = data})
                .error(function(data, status, headers, config){
                    console.log('Error connecting to backend :( ' + data + ' ' + status + ' ' + config);
                })
    }]
);*/



angular.module('food', ['food.service'])


        .controller('FoodController', ['$scope', 'Food', '$log', function($scope, Food) {

            console.log('Try to connect to backend server....');
            Food.all().success(
                function (allFoods) {
                    console.log('SERVER SUCCESS');
                    $scope.foods = allFoods;
                });
}]);


/*
myFoodControllers.controller('FoodListCtrl', ['$scope', 'Food', function($scope, Food){
    $scope.oneFoodVariable = Food.query();
}]);*/

