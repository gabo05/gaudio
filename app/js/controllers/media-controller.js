(function(gaudio){
    gaudio.controller('mediaController', ['$scope', function($scope){
        $scope.info = {
            status: "Click play to start capture"
        };
        this.startCapture = function(){
            $scope.info.status = "Capturing..."
        };
        this.stopCapture = function(){
            $scope.info.status = "Click play to start capture"
        };
    }]);
})(angular.module('gaudio'));