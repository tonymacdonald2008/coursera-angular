(function () {
  'use strict'
  angular.module('MenuApp')
  .controller('CategoriesController', CategoriesController);

  CategoriesController.$inject=['thecategories'];
  function CategoriesController (thecategories){
    var ctrl = this;
    ctrl.allcategories = thecategories;
  }

})();
