/**
 * Created by indrabijaynarayan on 4/24/16.
 */
angular.module('myApp',[])
.controller('MultiplicationCtrl', ['$scope', '$attrs', '$element', function($scope, $attrs, $element) {
    $scope.upper_limit = 10;
    $scope.$watch('upper_limit', function(newVal, oldVal) {
        console.log(oldVal, newVal);
        $scope.numbers = function () {
        var firstArray = [];
        for (var i = 1; i <= newVal; i++) {
                firstArray.push(i);
            }
            return firstArray;
        };
        $scope.compute = function (a, b) {
            return a * b;
        }
    });
}]);