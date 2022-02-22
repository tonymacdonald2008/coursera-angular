(function () {
  'use strict'
  angular.module('MenuApp')
  .controller('ItemsController', ItemsController);

  ItemsController.$inject=['categoryinfo'];
  function ItemsController (categoryinfo){
    var ctrl = this;
    ctrl.items = categoryinfo.menu_items;
    ctrl.info = categoryinfo.category;
  }

})();
