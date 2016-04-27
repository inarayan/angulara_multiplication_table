/**
 * Created by indrabijaynarayan on 4/24/16.
 */
angular.module('myApp',[])
.controller('MultiplicationCtrl', ['$scope', '$attrs', '$element', function($scope, $attrs, $element) {
    $scope.upper_limit = 10;
    //Watching the users input to determine the upper limit value
    $scope.$watch('upper_limit', function(newVal, oldVal) {
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