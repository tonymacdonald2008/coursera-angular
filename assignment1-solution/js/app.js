(function (){
  'use strict';
  angular.module('LunchCheck',[]).controller('LCController', LCController);

  LCController.$inject = ['$scope'];
  function LCController($scope){
    $scope.message="";
    $scope.list="";
    $scope.messagestyle="";
    $scope.boxstyle="";

    $scope.checkCount = function () {
      var parts = $scope.list.split(",");
      //console.log(parts);
      parts = parts.filter(e => String(e).trim());
      //console.log(parts);
      var count = parts.length;
      if ($scope.list.length == 0){

        $scope.message = "Please enter data first";
        $scope.messagestyle = "red";
        $scope.boxstyle = "#f00";

      } else {
        $scope.messagestyle = "green";
        $scope.boxstyle = "green";
        if (count < 4) {
          $scope.message = "Enjoy";
        } else {
          $scope.message ="Too Much";
        }
      }
    };
  }



})();
