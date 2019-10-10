(function() {
    "use strict";
    angular.module("LunchCheck", [])
    .controller("LunchCheckController", LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope){
        $scope.LunchMenu = "";
        $scope.MsgColor = "";
        $scope.BorderWidth = 0;
        $scope.checkLunchMenu = function() {
            var omenu = $scope.LunchMenu.split(",");
            var menu = [];
            
            for (var i=0; i<omenu.length; i++){
                if (omenu[i].trim() != "") {
                    menu.push(omenu[i]);
                }
            }
            if ($scope.LunchMenu == "" || menu.length == 0) {
                $scope.LunchMessage = "Please enter data first";
                $scope.MsgColor = "red";
                $scope.BorderWidth = "1px";
            } else if (menu.length <= 3) {
                $scope.LunchMessage = "Enjoy!";
                $scope.MsgColor = "green";
                $scope.BorderWidth = "1px";
            } else {
                $scope.LunchMessage = "Too much!";
                $scope.MsgColor = "green";
                $scope.BorderWidth = "1px";
            }
        };
    }
})();