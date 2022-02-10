(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyList)
.controller('AlreadyBoughtController', BoughtList)
.service('ShoppingListCheckOffService', checkoffservice);

ToBuyList.$inject = ['ShoppingListCheckOffService'];
function ToBuyList(ShoppingListCheckOffService) {
  var tobuy = this;
  tobuy.items = ShoppingListCheckOffService.getBuyItems();

  tobuy.checkoff = function (itemIndex) {
    ShoppingListCheckOffService.checkoff(itemIndex);
  };
}


BoughtList.$inject = ['ShoppingListCheckOffService'];
function BoughtList(ShoppingListCheckOffService) {
  var showList = this;

  showList.items = ShoppingListCheckOffService.getBoughtItems();
}


function checkoffservice() {
  var service = this;

  // List of shopping items
  var buyitems = [{name:"cookies",quantity:1},
              {name:"cookies",quantity:2},
              {name:"cookies",quantity:3},
              {name:"cookies",quantity:4},
              {name:"cookies",quantity:5},
              {name:"cookies",quantity:6},
              {name:"cookies",quantity:7},
              {name:"cookies",quantity:8},
              {name:"cookies",quantity:9}];

  var boughtItems = [];

  service.addItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    items.push(item);
  };

  service.checkoff = function (itemIndex) {
    boughtItems.push( buyitems.splice(itemIndex, 1)[0]);
  };

  service.getBuyItems = function () {
    return buyitems;
  };
  service.getBoughtItems = function () {
    return boughtItems;
  };
}

})();
