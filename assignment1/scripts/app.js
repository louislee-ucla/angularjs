(function() {
    "use strict";
    angular.module("LunchCheck", [])
    .controller("LunchCheckController", LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope){
        $scope.LunchMenu = "";
        $scope.checkLunchMenu = function() {
            var menu = $scope.LunchMenu.split(",");
            console.log(menu);
            if (menu.length > 3) {
                $scope.LunchMessage = "Too much!";
            } else {
                $scope.LunchMessage = "Enjoy!";
            }
        };
    }
})();