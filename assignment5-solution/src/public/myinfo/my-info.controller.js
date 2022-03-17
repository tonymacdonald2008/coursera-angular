(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['myinfo','ApiPath'];
function MyInfoController(myinfo,ApiPath) {
  var $ctrl = this;
  $ctrl.basePath = ApiPath;
  $ctrl.myinfo = myinfo;
}

})();
