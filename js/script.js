/**
 * Created by indrabijaynarayan on 4/24/16.
 */
angular.module('myApp',[])
.controller('MultiplicationCtrl',['$scope',function($scope){

    $scope.numbers=function(){
        var firstArray=[1,2,3,4,5,6,7,8,9,10];
        return firstArray;
    }

}])