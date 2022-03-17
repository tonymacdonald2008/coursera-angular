(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['InfoService','MenuService'];
function SignUpController(InfoService,MenuService) {
  var $ctrl = this;
  $ctrl.user = {};

  $ctrl.submit = function(){
    console.log("user:" + $ctrl.user);
    //clear any historical info
    $ctrl.user.favoritenotfound = false;
    $ctrl.user.menuItem = null;
    var promise = MenuService.getItem($ctrl.user.favorite);
    promise.then(function(response){
      $ctrl.user.menuItem = response;
      console.log($ctrl.user.menuItem);
      InfoService.setMyInfo($ctrl.user);
    })
    .catch( function (errorResponse){
      console.log(errorResponse.message);
      $ctrl.user.favoritenotfound = true;
    });


  }
}

})();
